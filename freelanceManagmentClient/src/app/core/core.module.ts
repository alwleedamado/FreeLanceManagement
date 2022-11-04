import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptService } from './services/intercept.service';
import { PromptComponent } from './components/prompt/prompt.component';



@NgModule({
  declarations: [
    CardComponent,
    PromptComponent
  ],
  imports: [
    ToastrModule.forRoot()
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule
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
