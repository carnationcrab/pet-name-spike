import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DogService {

  private dogsUrl = 'api/dogs';  // URL to web api

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('DogService: ' + message);
}

getDogs(): Observable<Dog[]> {
  return this.http.get<Dog[]>(this.dogsUrl)
    .pipe(
      catchError(this.handleError('getDogs', []))
    );
}

getDog(id: number): Observable<Dog> {
  const url = `${this.dogsUrl}/${id}`;
  return this.http.get<Dog>(url).pipe(
    tap(_ => this.log(`fetched dog id=${id}`)),
    catchError(this.handleError<Dog>(`getDog id=${id}`))
  );
}

/** DELETE: delete the dog from the server */
deleteDog (dog: Dog | number): Observable<Dog> {
  const id = typeof dog === 'number' ? dog : dog.id;
  const url = `${this.dogsUrl}/${id}`;

  return this.http.delete<Dog>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted dog id=${id}`)),
    catchError(this.handleError<Dog>('deleteDog'))
  );
}

/** PUT: update the dog on the server */
updateDog (dog: Dog): Observable<any> {
  return this.http.put(this.dogsUrl, dog, httpOptions).pipe(
    tap(_ => this.log(`updated dog id=${dog.id}`)),
    catchError(this.handleError<any>('updateDog'))
  );
}

/** POST: add a new dog to the server */
addDog (dog: Dog): Observable<Dog> {
  return this.http.post<Dog>(this.dogsUrl, dog, httpOptions).pipe(
    tap((dog: Dog) => this.log(`added dog w/ id=${dog.id}`)),
    catchError(this.handleError<Dog>('addDog'))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  constructor(private http: HttpClient,
  private messageService: MessageService) { }

}


