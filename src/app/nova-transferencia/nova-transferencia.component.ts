import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../model/transferencia.model';

import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;

  @Output() transfer: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
  ) { }

  onTransfer(): void {
    const valueToEmit: Transferencia = { valor: this.valor, destino: this.destino };
    this.transferenciaService.onAdd(valueToEmit).subscribe(resolve => {
      console.log(resolve);
      this.router.navigate(['/extrato']);
    }, error => console.error(error));
  }

  onClear(): void {
    this.valor = 0;
    this.destino = '0';
  }
}
