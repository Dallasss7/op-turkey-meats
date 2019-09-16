import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) { }

  getUserLocation() {
	  return this.http.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDE32ca5FXOCk29mDLXoSKKYzcS89AQ_h4`, {});
  }

  searchShelters() {
	  return this.http.post(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Animal%20Shelters&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDE32ca5FXOCk29mDLXoSKKYzcS89AQ_h4`, {
		  headers: {
			  'Access-Control-Request-Headers': 'x-requested-with'
		  }
	  });
  }
}
