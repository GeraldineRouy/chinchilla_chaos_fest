import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Artist} from './artist';

@Component({
  selector: 'artist',
  imports: [],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  @Input() artist!: Artist;

  @Output() artistDeleted = new EventEmitter();

  clickButtonToDelete(): void {
    const confirmed = confirm(`Are you sure you want to delete "${this.artist.name}"?`);
    if (confirmed) {
      this.artistDeleted.emit();
    }
  }

}
