import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import tokenUrl from '../constants/token';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public code: string = '';
  constructor(private httpService: HttpService) {}

  getToken() {
    const mockUserClient = 'client';
    const mockUserSecret = 'secret';
    const basicAuth =
      `Basic ` +
      Buffer.from(`${mockUserClient}:${mockUserSecret}`).toString('base64');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: basicAuth,
    });
    const options = {
      headers: headers,
    };

    return this.httpService.doPost(tokenUrl(this.code), null, options);
  }
}
