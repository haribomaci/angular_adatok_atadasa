import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable(); //observable: ennek az adatnak az értékére subscribbal így lehet feliratkozni
  constructor() { }

  setData(data:any){
    this.data.next(data);
  }
}
