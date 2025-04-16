import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Artist} from '../models/artist';
import {catchError, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private http = inject(HttpClient);
  artists = signal<Artist[]>([]);
  readonly url = 'https://artists-api-ndhd.onrender.com/artists';
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer f3e91f07a577250eb7bda4fccf37adf0',
  })

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.url, {headers: this.httpHeaders}).pipe(
      tap(artists => this.artists.set(artists)),
      catchError(error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        throw error;
      })
    );
  }

  addArtist(artist: Artist): Observable<Artist> {
    console.log('new artist created : ' + artist.name);
    return this.http.post<Artist>(this.url, artist, {headers: this.httpHeaders}).pipe(
      tap(newArtist => {
        this.artists.update(artists => [...artists, newArtist]);
      }),
      catchError(error => {
        console.error("Erreur lors de la création de l'artiste", error);
        throw error;
      }))
  }

  constructor() { }
}
