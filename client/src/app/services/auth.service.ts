import { Injectable } from '@angular/core';
import { User as IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private token = '';

  login(user: IUser): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', user).pipe(
      tap(({ token }) => {
        localStorage.setItem('auth-token', token);
        this.setToken(token);
      })
    );
  }
  setToken(token: string) {
    this.token = token;
  }
  getToken(): string {
    return this.token;
  }
  isAuthenticated(): boolean {
    return !!this.token;
  }
  logOut() {
    this.setToken('');
    localStorage.clear();
  }
  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('/api/auth/register', user);
  }
}
