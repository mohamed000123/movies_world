import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';


const routes: Routes = [
  {path: ""  ,  redirectTo:"register" , pathMatch: 'full'} ,   
  {path: "home"  ,  component: HomeComponent},
  {path:"about" , component: AboutComponent},
  {path:"login" , component: LoginComponent},
  {path:"register" , component: RegisterComponent},
  {path:"movie_details" , component: MovieDetailsComponent},
  {path:"movies" , component: MoviesComponent},
  {path:"navbar" , component: NavbarComponent},
  {path:"tvShows" , component: TvShowsComponent},
  {path: "**"  ,  component:NotfoundComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
