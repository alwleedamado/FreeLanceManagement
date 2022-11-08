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
import { EffectsModule } from '@ngrx/effects';
import { RouterEffect } from 'core/reducers/router-state/router.effects';
import { UiEffects } from 'core/reducers/ui-state/ui-state.effects';
import { CoreModule } from 'core/core.module';
import { CdkTable, CdkTableModule } from '@angular/cdk/table';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    CdkTableModule,
    NgbModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      autoPause: true
    }),
    ToastrModule.forRoot({
      progressBar: true,
      positionClass: "toast-top-right",
      extendedTimeOut: 3000,
    }),
    EffectsModule.forRoot([RouterEffect]),

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
