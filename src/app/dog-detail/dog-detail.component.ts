import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Dog }         from '../dog';
import { DogService }  from '../dog.service';
 
@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: [ './dog-detail.component.css' ]
})
export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;
 
  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getDog();
  }
 
  getDog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dogService.getDog(id)
      .subscribe(dog => this.dog = dog);
  }

  save(): void {
    this.dogService.updateDog(this.dog)
      .subscribe(() => this.goBack());
  }
 
  goBack(): void {
    this.location.back();
  }
}