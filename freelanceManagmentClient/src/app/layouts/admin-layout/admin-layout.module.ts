import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'core/core.module';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../components/components.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports: [
    RouterModule.forChild(AdminLayoutRoutes),
    ChartsModule,
    CoreModule,
    ComponentsModule,
  ],
  declarations: [
    UserProfileComponent,
    AdminLayoutComponent
  ]
})

export class AdminLayoutModule {}
