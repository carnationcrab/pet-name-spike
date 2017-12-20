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

getDog(id: number): Observable<Dog> {
  // Todo: send the message _after_ fetching the dog
  this.messageService.add(`DogService: fetched dog id=${id}`);
  return of(DOGS.find(dog => dog.id === id));
}

  constructor(private messageService: MessageService) { }

}


