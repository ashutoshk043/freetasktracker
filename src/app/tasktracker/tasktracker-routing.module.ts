import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListsComponent } from './task-lists/task-lists.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      { path: '', component: DashboardComponent },
      {path:'tasks', component:TaskListsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasktrackerRoutingModule { }
