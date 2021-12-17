import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any = {};
  loadingArtist?: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe( params => {
      // console.log(params["id"])
      this.loadingArtist = true;
      this.getArtista( params["id"])
      this.getTopTracks( params["id"])
    })

  }

  getArtista( id: string ) {
    this.spotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista)
        this.artista = artista
        this.loadingArtist = false;
      })
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id) 
      .subscribe(tracks => {
        console.log(tracks)
        this.topTracks = tracks
      })
  }
  
  ngOnInit(): void {
  }

}
