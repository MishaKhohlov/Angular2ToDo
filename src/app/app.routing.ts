import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestRouteComponent } from './test-route/test-route.component';
import { NotFoundComponent } from './not-found/notFound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'test-route/:id', component: TestRouteComponent},
  { path: 'test-route', component: TestRouteComponent},
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);
