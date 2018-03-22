import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing-module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TitleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
