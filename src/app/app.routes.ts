import { Routes } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ArtistsListComponent} from './components/artists-list/artists-list.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'artists', component: ArtistsListComponent}
];
