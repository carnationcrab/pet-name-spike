import { Component, OnInit } from '@angular/core';

import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
 selector: 'app-dogs',
 templateUrl: './dogs.component.html',
 styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
 dogs: Dog[];

 constructor(private dogService: DogService) { }

 ngOnInit() {
   this.getDogs();
 }

 delete(dog: Dog): void {
  this.dogs = this.dogs.filter(h => h !== dog);
  this.dogService.deleteDog(dog).subscribe();
}

 add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.dogService.addDog({ name } as Dog)
    .subscribe(dog => {
      this.dogs.push(dog);
    });
}
 getDogs(): void {
   this.dogService.getDogs()
   .subscribe(dogs => this.dogs = dogs);
 }
}