import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.css']
})
export class LeaseComponent {

  onSubmit(form: any): void {
    console.log(`you submitted value:`, form);
  }

}
