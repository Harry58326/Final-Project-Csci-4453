import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inactiveplayer',
  templateUrl: './inactiveplayer.component.html',
  styleUrls: ['./inactiveplayer.component.css']
})
export class InactiveplayerComponent {

  @Input() item: string = 'harry';

}
