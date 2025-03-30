import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path:'task-tracker',
        loadChildren: () => import('./tasktracker/tasktracker.module').then(m => m.TasktrackerModule)
    }
];
