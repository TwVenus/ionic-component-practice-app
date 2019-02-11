import { Component } from '@angular/core';
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = ['apples', 'bananas', 'berries'];

  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
  }
}
