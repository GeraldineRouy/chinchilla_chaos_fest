import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Artist} from '../models/artist';
import {FormsModule} from '@angular/forms';
import {ArtistService} from '../service/artist.service';

@Component({
  selector: 'artist-form',
  imports: [FormsModule],
  templateUrl: './artist-form.component.html',
  standalone: true,
  styleUrl: './artist-form.component.css'
})
export class ArtistFormComponent {
  @Output() artistAdded = new EventEmitter<Artist>();

  private artistService: ArtistService = inject(ArtistService);
  artists = this.artistService.artists;

  newArtist: Artist = {
    id: -1,
    name: '',
    photo: '',
  };

  submitForm(): void {
    const artist: Artist = {
      ...this.newArtist,
      id: Date.now()
    };

    this.artistService.addArtist(artist).subscribe({
      next: (newArtist) => {
        this.artistAdded.emit(newArtist);
        this.newArtist = {
          id: -1,
          name: '',
          photo: '',
        };
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout de l'artiste", error);
      }
    });
  }
}
