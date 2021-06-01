import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transferencia } from '../model/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listTransferance: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {
    this.listTransferance = [];
  }

  get transferances() {
    return this.listTransferance;
  }

  getAll(): any {
    return this.http.get<Transferencia[]>(this.url);
  }

  onAdd(transferance: Transferencia): Observable<Transferencia> {
    this.hidratar(transferance);

    return this.http.post<Transferencia>(this.url, transferance);
  }

  private hidratar(transferance: any): any {
    transferance.data = new Date();
  }

  onTransfer($event: any): void {
    const transferance = { ...$event, data: new Date() };
    this.transferances.push(transferance);
    console.log($event);
  }
}
