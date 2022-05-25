import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'authorized', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
];

export default routes;
