import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-cart',
  templateUrl: './name-cart.component.html',
  styleUrls: ['./name-cart.component.scss']
})
export class NameCartComponent implements OnInit {
@Input() cardName: string;
@Input() email: string;
@Input() phone: string;

  constructor() { }

  ngOnInit() {
  }

}
