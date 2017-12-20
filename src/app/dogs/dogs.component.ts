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

 getDogs(): void {
   this.dogService.getDogs()
   .subscribe(dogs => this.dogs = dogs);
 }
}