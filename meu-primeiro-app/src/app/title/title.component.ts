import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = " Bem Vindo! ";

  constructor() { }
  ngOnDestroy(): void {
    console.log("Finish Him");
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    alert("Foi alterado com sucesso");
  }

}
