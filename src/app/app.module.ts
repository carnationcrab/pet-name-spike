import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
 
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DogDetailComponent }  from './dog-detail/dog-detail.component';
import { DogsComponent }      from './dogs/dogs.component';
import { DogService }          from './dog.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
 
import { AppRoutingModule }     from './app-routing.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DogsComponent,
    DogDetailComponent,
    MessagesComponent
  ],
  providers: [ DogService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }