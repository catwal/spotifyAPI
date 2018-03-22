import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';

import { SearchService } from '../search/search.service';
import { Artist } from './artist';
import { Album } from '../album/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
 id: string;
 artist: Artist[];
 albums: Album[];

  constructor(
private searchService: SearchService,
private activatedRoute: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.activatedRoute.params
  	.map(params => params['id'])
  	.subscribe((id)=>{
  		this.searchService.getArtist(id)
  		.subscribe(artist =>{
this.artist = artist;
  		})

  		this.searchService.getAlbum(id)
  		.subscribe(albums =>{
  			this.albums = albums.items;
  		})
  	})
  }

}
