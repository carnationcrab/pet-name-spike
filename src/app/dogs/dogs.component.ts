import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DOGS } from '../mock-dogs';
import { DogService } from '../dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {

  dogs: Dog[];

  selectedDog: Dog;
  
  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }

  getDogs(): void {
    this.dogService.getDogs()
        .subscribe(dogs => this.dogs = dogs);
  }

  constructor(private dogService: DogService) { 
  }

  ngOnInit() {
    this.getDogs();
  }

}
