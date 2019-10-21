import { Component, OnInit } from "@angular/core";
import { LocationService } from "../location.service";

@Component({
  selector: "app-donate",
  providers: [LocationService],
  templateUrl: "./donate.component.html",
  styleUrls: ["./donate.component.scss"]
})
export class DonateComponent implements OnInit {
  constructor(private locationService: LocationService) {}

  ngOnInit() {}

  getLocation() {
    this.locationService.getUserLocation().subscribe(location => {
      console.log("HERE ", location);
    });
  }

  searchShelters() {
    this.locationService.searchShelters().subscribe(location => {
      console.log("HERE Shelters ", location);
    });
  }
}
