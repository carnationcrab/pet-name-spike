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
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
 
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'pet-match' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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