import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ArtistsListComponent} from './components/artists/artists-list/artists-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    HomepageComponent,
    ArtistsListComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'my-very-first-angular-app';
}
