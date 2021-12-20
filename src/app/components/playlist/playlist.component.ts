import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: any = {};
  topTracks: any = {};
  loadingPlaylist?: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe( params => {
      this.loadingPlaylist = true;
      this.getPlaylist( params["id"])
      // this.getTopPlaylistTracks( params["id"])
    })

  }

  getPlaylist( id: string ) {
    this.spotify.getPlaylist(id)
      .subscribe(playlist => {
        console.log(playlist)
        this.playlist = playlist
        this.loadingPlaylist = false;
      })
  }

  // getTopPlaylistTracks(id: string) {
  //   this.spotify.getTopPlaylistTracks(id) 
  //     .subscribe(tracks => {
  //       console.log(tracks)
  //       this.topTracks = tracks
  //     })
  // }

  ngOnInit(): void {
  }

}
