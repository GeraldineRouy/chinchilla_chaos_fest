import {Component, inject, OnInit} from '@angular/core';
import {ArtistComponent} from '../artist/artist.component';
import {NgFor} from '@angular/common';
import {Artist} from '../models/artist';
import {ArtistFormComponent} from '../artist-form/artist-form.component';
import {ArtistService} from '../service/artist.service';

@Component({
  selector: 'artists-list',
  imports: [
    ArtistComponent,
    NgFor,
    ArtistFormComponent
  ],
  template: `
    <h2>{{this.title}}</h2>
    @for (artist of artists() ; track artist.id) {
      <artist class="artist-list" [artist]="artist" ></artist>
    }
    <artist-form></artist-form>
  `,
  //templateUrl: './artists-list.component.html',
  standalone: true,
  styleUrl: './artists-list.component.css'
})
export class ArtistsListComponent implements OnInit {
  private artistService: ArtistService = inject(ArtistService);
  artists = this.artistService.artists;
  title: string = '2025 Artists';

  ngOnInit() {
    this.artistService.getArtists().subscribe();
  }

  /*

  artistList: Artist[] = [
    {
      id: 0,
      name: 'Dustfur - France - Death Metal',
      imageUrl: '/images/dustfur-band.png',
      description: 'Description of the band.'
    },
    {
      id: 1,
      name: 'Squeak of Death - Sweden - Melodic Death Metal',
      imageUrl: '/images/squeak-of-death-band.png',
      description: 'Description of the band.'
    },
    {
      id: 2,
      name: 'Whiskerblight - Finland - Black Metal',
      imageUrl: '/images/whiskerblight-band.png',
      description: 'Description of the band.'
    },
    {
      id: 3,
      name: 'Peltyrion - Danemark - Atmospheric Modern Djent Prog',
      imageUrl: '/images/peltyrion-band.png',
      description: 'Description of the band.'
    },
    {
      id: 4,
      name: 'Fjellpels - Norway - Black Folk Metal',
      imageUrl: '/images/fjellpels-band.png',
      description: 'Description of the band.'
    },
    {
      id: 5,
      name: 'Chaosdust - USA/Michigan - Metalcore',
      imageUrl: '/images/chaosdust-band.png',
      description: 'Description of the band.'
    },
    {
      id: 6,
      name: 'Lord of the Chin - Germany - Gothic Industrial Metal',
      imageUrl: '/images/lord-of-the-chin-band.png',
      description: 'Description of the band.'
    }
  ];

  addArtist(artist: Artist): void {
    this.artistList.push(artist);
  }

  deleteArtist(artist: Artist): void {
    const index = this.artistList.indexOf(artist);
    if (index > -1) {
      this.artistList.splice(index, 1);
    }
  }
   */

}
