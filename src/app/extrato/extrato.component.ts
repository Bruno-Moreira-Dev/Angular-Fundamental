import { Component, OnInit } from '@angular/core';

import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../model/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferances: any[] = [];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.getAll().subscribe((transferances: Transferencia[]) => {
        this.transferances = transferances;
        console.table(transferances);
      });
  }

}
