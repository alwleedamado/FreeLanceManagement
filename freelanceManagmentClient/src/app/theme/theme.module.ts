import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './routing';
import { CoreModule } from '../core/core.module';
import { ThemeComponent } from './theme/theme.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
children: routing
  }
]
@NgModule({
  declarations: [
    ThemeComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    AsideMenuComponent,
    BreadcrumbComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class ThemeModule { }
