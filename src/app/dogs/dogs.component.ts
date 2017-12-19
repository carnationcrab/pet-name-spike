import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DOGS } from '../mock-dogs';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {

  dogs = DOGS;

  selectedDog: Dog;
  
  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
