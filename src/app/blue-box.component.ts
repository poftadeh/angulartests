import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blue-box',
  templateUrl: './blue-box.component.html',
  styleUrls: ['./blue-box.component.css']
})
export class BlueBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() message: string;
  @Input() isdisabled: number;
}
