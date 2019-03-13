import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-box',
  templateUrl: './red-box.component.html',
  styleUrls: ['./red-box.component.css']
})
export class RedBoxComponent implements OnInit {
  redMessage = "abc";

  constructor() { }

  ngOnInit() {
  }

}
