import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Freelancer } from 'freelancer/models/freelancer';
import { FreelancerActoins, FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-freelancer-form',
  templateUrl: './freelancer-form.component.html',
  styleUrls: ['./freelancer-form.component.scss']
})
export class FreelancerFormComponent extends BaseDialogForm<Freelancer> {
  title: string;
  constructor(
    store: Store<AppState>, 
    layoutService: LayoutUtilsService,
    dialogRef: NgbActiveModal
    ) {
    super(store, layoutService, dialogRef, FreelancerActoins, FreelancerSelectors)
   }
  createForm() {
  }
  storeSubscriptions() {
  }

}
