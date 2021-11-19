import { Injectable } from '@angular/core';
import { HeaderComponent } from './main-window/header/header.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { data } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  constructor() { }
  private _header = new BehaviorSubject<any>('')
  passData<T>()
  {
    this._header.next(data)
  }
  on<T>():Observable<T>
  {
    return this._header.asObservable()
  }

  openModal<T>()
  {
    this._header.next(data)
  }
  on2<T>():Observable<T>
  {
    return this._header.asObservable()
  }
}
