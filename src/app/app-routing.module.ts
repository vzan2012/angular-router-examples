import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  {
    path: 'departments',
    component: DepartmentListComponent
  },
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [{
      path: 'overview',
      component: DepartmentOverviewComponent
    }, {
      path: 'contact',
      component: DepartmentContactComponent
    },]
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  }, {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
