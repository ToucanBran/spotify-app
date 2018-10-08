import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  searchTrack(query: string) {
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    const queryUrl = `https://api.spotify.com/v1/search?${params}`;

  }
}
