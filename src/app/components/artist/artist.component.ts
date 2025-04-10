import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artist } from './artist';
import { NgIf } from '@angular/common';

@Component({
  selector: 'artist',
  imports: [NgIf],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  @Input() artist!: Artist;
  @Output() artistDeleted = new EventEmitter<void>();

  isDeleting = false;

  clickButtonToDelete(): void {
    const confirmed = confirm(`Are you sure you want to delete "${this.artist.name}"?`);
    if (confirmed) {
      this.isDeleting = true;
      setTimeout(() => {
        this.artistDeleted.emit();
      }, 1000);
    }
  }
}
