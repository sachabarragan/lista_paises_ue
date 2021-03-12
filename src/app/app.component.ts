import { Component } from '@angular/core';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paises: any[];

  constructor(
    private _paisesService: PaisesService
  ){

  }

  async ngOnInit(){
    this.paises = await this._paisesService.getPaises();
    console.log(this.paises);
  }
}
