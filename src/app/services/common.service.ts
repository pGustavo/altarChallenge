import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PaymentModel} from "../models/payment.model";

const headerOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
};

@Injectable()
export class CommonService {

  mockurl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.mockurl, headerOptions);
  }
  postPayment(payment: PaymentModel): Observable<any> {
    return this.http.post(this.mockurl, payment, headerOptions);
  }
  updatePayment(payment: PaymentModel): Observable<any> {
    return this.http.put(this.mockurl, payment, headerOptions);
  }
}
