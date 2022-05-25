import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

const redirectToUrl = '';

const routes = [
  { route: 'home', component: HomeComponent, pathMatch: 'full' },
  { route: 'auth', component: AuthComponent, pathMatch: 'full' },
  { route: '', redirectTo: 'auth', pathMatch: 'full' },
  { route: 'authorized', redirectTo: 'auth', pathMatch: 'full' },
  { route: 'login', redirectTo: redirectToUrl, pathMatch: 'full' },
];

export default routes;
