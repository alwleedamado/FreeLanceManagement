import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { TableListModule } from 'modules/table-list/table-list.module';



@NgModule({
  declarations: [],
  imports: [
    CoreModule
  ],
  exports:[
    CoreModule,
    TableListModule
  ]
})
export class SharedModule { }
