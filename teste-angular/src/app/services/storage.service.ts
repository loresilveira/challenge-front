import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private localStorage: Storage;

  constructor() { 
    this.localStorage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.localStorage) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    const localStorage = this.localStorage.getItem(key); 
    if (localStorage) {
      return JSON.parse(localStorage);
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.localStorage) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.localStorage) {
      this.localStorage.clear();
      return true;
    }
    return false;
  }
}