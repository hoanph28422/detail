import { Component } from '@angular/core';
import { product } from 'src/app/datas/mockdata';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products =product
}
