import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }                from '@angular/forms';
import { HttpClientModule }                   from '@angular/common/http';

//admin component
import { AdminComponent } from './admin.component';

//lazyload
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
    imports: [
        AdminComponent,
        AdminRoutingModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [
        AdminComponent
      ]

})
export class AdminModule{}