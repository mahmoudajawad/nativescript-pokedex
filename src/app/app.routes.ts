import { Routes } from '@angular/router';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from '@src/app/pages/today/today.page';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomePage,
  },
  {
    path: 'today',
    component: TodayPage,
},
];
