import { Component } from '@angular/core';
import { Observable, of, map, interval, fromEvent, from, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers$: Observable<Number>;
  constructor() {}
}
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
numbers$.subscribe((value) => console.log(value));

// //1. OPERATIONS EXAMPLES
numbers$
  .pipe(map((value) => value * 3))
  .subscribe((value) => console.log(value));

//2. INTERVAL
const interval$ = interval(1000);
interval$.subscribe((val) => console.log('Stream ' + val));

const click$ = fromEvent(document, 'click');
click$.subscribe((evt) => console.log('Mouse clicked' + evt));

//3. DEFINE AN OBJECT CALLED USERS
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
];

const users$ = from(users);
users$.subscribe((user) => console.log(user));

users$
  .pipe(filter((user) => user.age <= 30))
  .subscribe((user) => console.log(user));

//DISPLAY ALL USERS WITH AGE IS GREATER THAN 30 AND CONVERT EACH NAME TO UPPERCASE
users$
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      age: user.age > 30,
    }))
  )
  .subscribe((user) => console.log(user));

//4. Using next, error and complete
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('JUST BEFORE SUBSCRIBE');
observable.subscribe({
  next(x) {
    console.log('GOT VALUE' + x);
  },
  error(err) {
    console.error('SOMETHING WRONG OCCURED: ' + err);
  },
  complete() {
    console.log('DONE');
  },
});
console.log('JUST AFTER SUBSCRIBE');
