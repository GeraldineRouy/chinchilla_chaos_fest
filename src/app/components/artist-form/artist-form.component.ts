import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Artist} from '../artist/artist';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'artist-form',
  imports: [FormsModule],
  templateUrl: './artist-form.component.html',
  styleUrl: './artist-form.component.css'
})
export class ArtistFormComponent {
  @Output() artistAdded = new EventEmitter<Artist>();

  newArtist: Artist = {
    id: -1,
    name: '',
    imageUrl: '',
    description: ''
  };

  submitForm(): void {
    const artist: Artist = {
      ...this.newArtist,
      id: Date.now()
    };
    this.artistAdded.emit(artist);
    this.newArtist = {
      id: -1,
      name: '',
      imageUrl: '',
      description: ''
    }
  }

}
