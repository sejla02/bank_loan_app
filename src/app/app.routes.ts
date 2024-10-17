import { Routes } from '@angular/router';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'loanApp',
        pathMatch: 'full'
    },
    {
        path: 'loanApp',
        component: LoanApplicationComponent
    },
    {
        path: 'applicationList',
        component: ApplicationListComponent
    }
];
