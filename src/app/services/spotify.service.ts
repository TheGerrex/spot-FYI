import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log("Spotify")
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      "Authorization": "Bearer BQAHqLWTfApNThRL7buqn7yf_I8-ikGLPly2eKELLvM5lJMeyb_SnCvLxU5n684AC3A3YJFur63QiKLqlN8"
    });
    
    return this.http.get(url, {headers})
  }

  getNewReleases() {
    
    return this.getQuery("browse/new-releases")
      .pipe(map( (data: any) => data.albums.items));
        
  }

  getArtistas(termino: string) {
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map( (data: any) => {
        return data.artists.items;
      }));
    
    // this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    //     .pipe(map( (data: any) => {
    //       return data.artists.items;
    //     }));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
      .pipe(map( (data: any) => {
        return data["tracks"];
      }));
  }
  
}
