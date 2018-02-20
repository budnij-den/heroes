import { Component } from '@angular/core';

 class Hero {
  id: number;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'tour of heroes';
  public hero:Hero = {
    id: 1,
    name: 'Windstorm'
  }

}
