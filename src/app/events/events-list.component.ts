import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
  <div>
    <h1> Upcoming Angular events </h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (eventClick)="handleEventClickled($event)" [event]="event"> </event-thumbnail>
      </div>
     </div>
    </div>
  `
})
export class EventsListComponent {
  events = [
    {name: 'ng-conf 2037', date: '4/15/2037', time: '9am',
     location: {address: 'The Palatial America Hotel & a longer string that will make this card larger',
     city: 'Salt Lake City', country: 'USA'}},
    {name: 'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Rd', city: 'London', country: 'England'}},
    {name: 'ng-nl', date: '4/15/2037', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
     {name: 'UN Angular Summit', date: '6/10/2037', time: '8am',
     location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},
  ];
/*    event1 = {
    name: 'Angular Connect',
    date: '12-12-2018',
    time: '10:10 am',
    price: 555,
    imageUrl: '/src/assets/images/angularconnect-shield.png',
    location: {
      address: 'Belgradzka 22/21',
      city: 'Warsaw',
      country: 'Poland'
    }
  };*/

  handleEventClickled(data) {
    console.log('received:', data);
  }
}
