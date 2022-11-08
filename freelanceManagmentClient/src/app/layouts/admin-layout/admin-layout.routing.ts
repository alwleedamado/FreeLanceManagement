import { Routes } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    {path:'freelancers', loadChildren: () => import('freelancer/freelancer.module').then(x => x.FreelancerModule)}
];
