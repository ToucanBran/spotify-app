import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private _authorizeUrl = [`https://accounts.spotify.com/authorize?`,
    `client_id=`


  constructor(private httpClient: HttpClient) { }

  authorize() {

    this.httpClient.get('https://accounts.spotify.com/authorize?client_id=7751b1c9d1ce47a4bb87a45552bd5df7&redirect_uri=http%3A%2F%2Fgoogle.com%2F&response_type=token')
  }
}
