import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


const access_token = 'BQAmOrdMzyL0RD6g0FGW2KQCA0x7DJySkVOLS6sPduzdtHW-K-vTYKlXbXzirhe9pUrgagNSUZrjJRqpbveon6v1mEOBmraha1xsA8YhA2cwn7Y-knY1MjlhMbQ4VaGPcLc0O5ZMmlHpoSeA2GlmHTfBZY6pnVZfy7Q&refresh_token=AQDWPDiajYgXzj6ak8ZPLARK10pK8DBUpJ0UWwqFrMi-lBAdf4yQ9mUlv0C1iAUFdjfAmMqcj_Oo83Iw_-WLcCIzZf5vBG_0BXe0T-WOU6IWL1BXEkaOH0wR8N4D_B7BlYA';
const headers = new Headers({ 'Authorization': 'Bearer ' + access_token });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class SearchService {
	private clientId: string = '';
	private artistsUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id'+this.clientId+'&q=';
	private artistUrl: string;
	private albumUrl: string;
	private titleUrl: string;


  constructor(private http: Http) { }

searchArtists(searchTerm: string){
let url = this.artistsUrl + searchTerm;
return this.http.get(url, options).map(res => res.json());
}



getArtist(id:string){
this.artistUrl ='https://api.spotify.com/v1/artists/'+id;
	return this.http.get(this.artistUrl, options)
	.map(res => res.json());

}

getAlbum(artistId: string){
	this.albumUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
	return this.http.get(this.albumUrl, options)
	.map(res => res.json());

}
getTitle(id: string){
 this.titleUrl = 'http://api.spotify.com/v1/tracks/'+id;
 return this.http.get(this.titleUrl, options)
 .map(res => res.json())
}

}
