import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {

  @Input() items: any[] = [];
  constructor( private router: Router) { }
  
  verPlaylist( item: any ) {
    let playlistId = item.id

    // if ( item.type === "artist") {
    //   artistaId = item.id
    // } else {
    //   artistaId = item.artists[0].id
    // }
    this.router.navigate(['/playlist', playlistId])
  }
  ngOnInit(): void {
  }

}
