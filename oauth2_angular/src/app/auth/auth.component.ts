import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getAuthorizationCode();
  }

  ngOnInit(): void {
    // this.subscription = this.authService.....
    this.authService
      .getToken()
      .pipe(take(1))
      .subscribe((tokens) => {
        console.log('Tokens ####', tokens);
        if ((tokens as any)?.id_token) {
          sessionStorage.setItem('id_token', (tokens as any).id_token);
          sessionStorage.setItem(
            'refresh_token',
            (tokens as any).refresh_token
          );
          this.router.navigate(['/home']);
        }
      });
  }

  getAuthorizationCode() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params?.['code']) {
        this.authService.code = params['code'];
      }
    });
  }

  // Alternatively to not get memory leaks

  //   ngOnDestroy(): void {
  //     this.subscription.unsubscribe();
  //   }
}
