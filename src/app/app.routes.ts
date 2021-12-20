
import { Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AccessTokenComponent } from './components/access-token/access-token.component';
import {AuthGuardService} from './services/auth-guard.service';
import { PlaylistComponent } from './components/playlist/playlist.component';

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService]},
  { path: "search", component: SearchComponent},
  { path: "artist/:id", component: ArtistaComponent, canActivate: [AuthGuardService]},
  { path: "playlist/:id", component: PlaylistComponent, canActivate: [AuthGuardService]},
  { path: "access_token", component: AccessTokenComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

  // { path: "artista", component: ArtistaComponent}
  
];
