import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-car-thumbnail',
  styleUrls: ['car.thumbnail.component.css'],
  template: `
    <div class="parentForefront">
      <div class="forefront">
        <img class="autoImg" [src]="car.imageUrl">
        <h2 class="name">{{car.name}}</h2>
        <div class="price">Price: \${{car.price}}</div>
        <div>Top Speed: {{car.topSpeed}}</div>
        <div>MSRP: $\{{car.msrp}}</div>
        <button class="btn" [routerLink]="['/cars', car.id]">Lease Me</button>
      </div>
    </div>
  `
})

export class CarThumbnailComponent {
  @Input() car: any;
}
