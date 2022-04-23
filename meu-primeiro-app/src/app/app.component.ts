import { Component, OnInit} from '@angular/core';


/*
DoCheck
AfterContentInit
AfterContentChecked
AfterViewInit
AfterViewChecked
*/
@Component({
  selector: 'app-root',
  template: ` <app-title *ngIf="destruir"></app-title>
  <button (click)="destruirComponente()">Destruir componente</button>
 {{valor}}
 <button (click)= "adicionar()">adicionar</button>
  <router-outlet></router-outlet>`,

})

export class AppComponent implements OnInit{
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() { }

  public destruirComponente(){
    this.destruir = false;
  }

  public adicionar(): number{
    return this.valor += 1;
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngDoCheck(): void {
    console.log("NgDocheck")
  }
  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000)
  }
  ngOnchange(): void {

  }
}
