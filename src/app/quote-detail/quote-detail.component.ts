import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
@Input() quotess!:Quotes
@Output () isComplete=new EventEmitter<boolean>()

deletegoal(complete:boolean){
  this.isComplete.emit(complete)
}
  constructor() { }

  ngOnInit(): void {
  }

}
