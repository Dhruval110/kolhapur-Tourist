import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: string | null = null;

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined';
    } catch {
      return false;
    }
  }

  login(email: string): void {
    this.loggedInUser = email;
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('loggedInUser', email);
    }
  }

  logout(): void {
    this.loggedInUser = null;
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('loggedInUser');
    }
  }

  isLoggedIn(): boolean {
    if (!this.isLocalStorageAvailable()) {
      return false;
    }
    return !!localStorage.getItem('loggedInUser');
  }

  getLoggedInUser(): string | null {
    if (!this.isLocalStorageAvailable()) {
      return null;
    }
    return localStorage.getItem('loggedInUser');
  }
}
