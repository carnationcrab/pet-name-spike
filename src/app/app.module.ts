import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';

import { FormsModule } from '@angular/forms';
import { DogDetailComponent } from './dog-detail/dog-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
