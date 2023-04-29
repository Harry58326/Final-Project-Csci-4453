import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activeplayer',
  templateUrl: './activeplayer.component.html',
  styleUrls: ['./activeplayer.component.css']
})
export class ActiveplayerComponent {
  @Input() order:any;
}
