import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
// quote:Quotes=new Quotes(1,"Dream big my people","Nancy","wanjugu",new Date(2020,7,12))
quote!:Quotes;
quotesr:Quotes[]=[new Quotes(1,"Dream big my people","Nancy","wanjugu",new Date(2020,7,12)),
new Quotes(2,"happy people","Nancy","wangu",new Date(2021,7,12)),
new  Quotes(3,"codding fun times","Nan","wanjugu",new Date(2020,8,12))]


goaldelete(isComplete: any,index: any){
  if(isComplete){
    this.quotesr.splice(index,1)
  }

}






  constructor() { }

  ngOnInit(): void {
  }

}
