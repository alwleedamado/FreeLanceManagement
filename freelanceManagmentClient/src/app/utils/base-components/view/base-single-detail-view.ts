import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { routerSelectors } from "core/reducers/router-state/router.selectors";
import { ComponentType } from "ngx-toastr";
import { Observable } from "rxjs";
import { map, skip, takeWhile } from "rxjs/operators";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { communicationResult } from "utils/models/communicationResult";
import { IngrxActions, IngrxSelectors } from "utils/models/ngrx";
import { PromptParts } from "utils/models/prompt";
import { IBaseSingleDetail } from "./i-base-single-view";

@Injectable()
export abstract class BaseSingleDetail<T> implements IBaseSingleDetail<T> {
    componentActive = true;


    loading$: Observable<boolean>;
    deleting$: Observable<boolean>;

    dispatchAction = true;


    abstract id: any;
    componentName: any;
    moduleName: any;
    abstract get title();

    defaultDeletePrompt: PromptParts = {
        title: "PROMPTS.DELETE_ENTITY",
        message: "PROMPTS.SURE_TO_DELETE",
        yesLabel: "BUTTONS.DELETE",
        noLabel: "BUTTONS.CANCEL",

        yesCssClass: "btn btn-outline-danger",
        noCssClass: "btn btn-light",

    }

    entity: T
    entity$: Observable<T>

    constructor(
        protected store: Store<AppState>,
        protected layout: LayoutUtilsService,
        private formComponent: ComponentType<any>,
        private actions: IngrxActions<T>,
        private selectors: IngrxSelectors<T>) { }

    ngOnInit(): void {

        if (this.dispatchAction && this.id)
            this.store.dispatch(this.actions.initialFind({ id: this.id }));

        this.loading$ = this.store.select(this.selectors.selectFindResult).pipe(map(x => x == communicationResult.request));
        this.deleting$ = this.store.select(this.selectors.selectDeleteResult).pipe(map(x => x == communicationResult.request));

       this.entity$ = this.store
            .pipe(
                takeWhile(() => this.componentActive),
                select(this.selectors.selectDataEntityById(this.id)))

        this.entity$.subscribe(e => this.entity = e);


        this.store.pipe(
            takeWhile(() => this.componentActive),
            select(routerSelectors.data))
            .subscribe((r) => {
                if (!this.moduleName)
                    this.moduleName = r.module;
                if (!this.componentName)
                    this.componentName = r.component;
            })

        this.storeSubscription();
    }
    ngOnDestroy() {
        this.componentActive = false;
    }

    edit() {
        this.layout.open(this.formComponent, { data: { id: this.id } });
    }

    delete() {
        this.layout.deletePrompt(this.defaultDeletePrompt).subscribe(r => {
            if (r)
                this.store.dispatch(this.actions.deleteEntity({ id: this.id }));
        })
    }
    
    abstract storeSubscription();
}