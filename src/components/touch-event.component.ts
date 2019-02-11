import { Component } from '@angular/core';

@Component({
    selector: 'app-touch-event',
    template: `<ion-list> 
                    <ion-list-header>
                    Group
                    </ion-list-header>
                    <ion-item class="gestures" (tap)="onEventClick()" (press)="onEventPress()">
                    Try
                    </ion-item>
               </ion-list>`
})
export class TouchEventComponent{
    onEventClick(){
        console.log('I am Clicked!');
      }
    
      onEventPress(){
        console.log('I am Pressed!');
      }
}