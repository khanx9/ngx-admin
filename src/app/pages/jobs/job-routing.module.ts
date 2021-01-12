import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobRegisterComponent } from './job-register/job-register.component';
import { JobComponent } from './job.component';


const routes: Routes = [{
  path: '',
  component: JobComponent,
  children: [{
    path: 'job-detail',
    component: JobDetailComponent,
  }, {
    path: 'job-list',
    component: JobListComponent,
  }, {
    path: 'job-register',
    component: JobRegisterComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule { }

export const routedComponents = [
  JobComponent,
  JobDetailComponent,
  JobListComponent,
  JobRegisterComponent
];
