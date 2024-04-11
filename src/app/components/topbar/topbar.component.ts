import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  @Output()
  barClicked : EventEmitter<boolean> = new EventEmitter<boolean>;

  onBarsClicked(){
    this.barClicked.emit(true);
  }

}
