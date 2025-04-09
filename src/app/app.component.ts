import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ArtistsListComponent} from './components/artists-list/artists-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomepageComponent, ArtistsListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'my-very-first-angular-app';
}
