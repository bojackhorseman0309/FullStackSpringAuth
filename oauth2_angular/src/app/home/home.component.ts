import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import demoUrl from '../constants/demo';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  public demoContent: any = '';

  ngOnInit(): void {
    this.getDemoInformation();
  }

  private getDemoInformation() {
    const token = sessionStorage.getItem('id_token');
    const bearerToken = `Bearer ${token}`;
    const options = {
      headers: new HttpHeaders({ Authorization: bearerToken }),
      responseType: 'text/plain',
    };

    this.httpService
      .doGet(demoUrl(), options)
      .pipe(take(1))
      .subscribe((content) => {
        this.demoContent = content;
      });
  }
}
