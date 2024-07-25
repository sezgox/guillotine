import { Routes } from '@angular/router';
import { ArtistsComponent } from './pages/artists/artists.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'artists', component: ArtistsComponent},
    {path: '**', redirectTo: 'home'}
];
