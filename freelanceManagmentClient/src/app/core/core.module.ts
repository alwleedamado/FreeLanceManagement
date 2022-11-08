import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptService } from './services/intercept.service';
import { PromptComponent } from './components/prompt/prompt.component';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    CardComponent,
    PromptComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    CdkTableModule
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule,

    // Components
    CardComponent,
    PromptComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ]
})
export class CoreModule { }
