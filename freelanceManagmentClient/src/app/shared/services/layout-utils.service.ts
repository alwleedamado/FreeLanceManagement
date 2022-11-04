import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Store } from "@ngrx/store";
import { PromptComponent } from "core/components/prompt/prompt.component";
import { ToastService } from "core/services/toast.service";
import { environment } from "environments/environment";
import { ActiveToast } from "ngx-toastr";
import { from, Observable,merge, Subscription, of } from "rxjs";
import { take, catchError} from "rxjs/operators";
import { CustomError } from "utils/models/custom-error";
import { DialogConfig } from "utils/models/dialog-config.model";
import { PromptParts } from "utils/models/prompt";

@Injectable({ providedIn: "root", })

export class LayoutUtilsService {
    modalOptions: any;
    constructor(
        private dialog: NgbModal,
        private toastService: ToastService,
        private store: Store<any>) { }

    prompt(prompt: PromptParts): Observable<boolean> {
        let ref = this.dialog.open(PromptComponent, { ...this.modalOptions, size: 'lg', backdrop: true });
        ref.componentInstance.prompt = prompt;
        return from(ref.result).pipe(take(1))
    }

    open(componentRef: any, config?: DialogConfig): Observable<any> {
        let ref = this.dialog.open(componentRef, { ...this.modalOptions, ...config?.options });

        if (config?.data) {
            for (let key in config.data)
                ref.componentInstance[key] = config.data[key];
        }
        var events = Subscription.EMPTY;

        return from(ref.result)
            .pipe(
                take(1),
                catchError(err => {
                    console.error(err)
                    return of(null);
                }))

    }

    showSuccess(_message: any, _title?: any): ActiveToast<any> {
        return this.toastService.showSuccess(_title, _message)
    }

    showInfo(_message: any, _title?: any): ActiveToast<any> {
        return this.toastService.showInfo(_title, _message)
    }


    showError(error: CustomError): ActiveToast<any> {
        if (!environment.production && error.details)
            console.log("ERROR: ", error);
        let msg = error.message;

        if (error.formErrors && error.formErrors.trim) // formerror is string
            msg = error.formErrors;

        return this.toastService.showError(error.title, error.message)

    }

    deletePrompt(prompt?: PromptParts): Observable<boolean> {
        let p: PromptParts = {
            title: prompt?.title ?? "Delete Confirmation",
            message: prompt?.message ?? "Are you sure to delete this entity",
            yesLabel: prompt?.yesLabel ?? "Delete",
            noLabel: prompt?.noLabel ?? "Cancel",

            yesCssClass: prompt?.yesCssClass ?? "btn btn-outline-danger",
            noCssClass: prompt?.noCssClass ?? "btn btn-light",
        }
        return this.prompt(p);
    }
}