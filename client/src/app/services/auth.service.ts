import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: IUser): Observable<{ roken: string }> {
    return this.http.post<{ roken: string }>('/api/auth/login', user);
  }
  register() {}
}
