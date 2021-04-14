import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url, endpoint, params) {
    return this.http.get(url + '/' + endpoint, { params: params || null });
  }
}