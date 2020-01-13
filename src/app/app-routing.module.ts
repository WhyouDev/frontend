import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component'
import { HomepageComponent } from './frontend/homepage/homepage.component';
import { HeaderComponent } from './frontend/header/header.component';
import { SectionComponent } from './frontend/section/section.component';
import { FooterComponent } from './frontend/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '',
    component: AdminComponent
  },{
    path:'',
    component: HeaderComponent
  }
  ,{
    path:'',
    component: SectionComponent
  }
  ,{
    path:'',
    component: FooterComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomepageComponent,AdminComponent]
