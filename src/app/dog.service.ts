import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { DOGS } from './mock-dogs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';



@Injectable()
export class DogService {

getDogs(): Observable<Dog[]> {
  this.messageService.add('DogService has fetched Dogs!')
  return of(DOGS);
}
  constructor(private messageService: MessageService) { }

}
