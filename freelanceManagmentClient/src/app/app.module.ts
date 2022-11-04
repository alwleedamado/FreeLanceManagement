import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MergedRouterStateSerializer } from 'core/reducers/router-state/merged-route-serialzer';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'core/reducers';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
		StoreModule.forRoot(reducers, { metaReducers }),

    ToastrModule.forRoot({
      progressBar: true,
      positionClass: "toast-top-right",
      extendedTimeOut: 3000,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: MergedRouterStateSerializer
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
