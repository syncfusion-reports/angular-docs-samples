import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ej-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Declaring onHamBurgerClick Event to acheive sidebar toggling from the app component side.
  @Output() hamBurgerClick: EventEmitter<{}> = new EventEmitter();

  // This will be fired on clicking hamburger icon.
  public onClick(): void {
    // This will fire an event in app component.
    this.hamBurgerClick.emit();
  }

}
