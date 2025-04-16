import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artist} from '../models/artist';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private http = inject(HttpClient);
  private artists = signal<Artist[]>([]);
  readonly url = 'https://artists-api-ndhd.onrender.com/artists';

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.url).pipe(
      tap(artists => this.artists.set(artists))
    );
  }

  constructor() { }
}
