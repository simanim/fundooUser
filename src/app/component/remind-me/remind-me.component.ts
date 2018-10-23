import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remind-me',
  templateUrl: './remind-me.component.html',
  styleUrls: ['./remind-me.component.css']
})
export class RemindMeComponent implements OnInit {

  public remind:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  reminder(){
    this.remind=false;
  }
}