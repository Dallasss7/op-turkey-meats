import { Component, HostListener, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("nav") public nav;
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (window.pageYOffset > 150) {
      this.nav._elementRef.nativeElement.classList.add("hide");
    } else {
      this.nav._elementRef.nativeElement.classList.remove("hide");
    }
  }

  public title = "Operation Turkey Meats";

  constructor(public router: Router) {}

  public redirectDonate() {
    console.log("HERE");
    this.router.navigate(["/donate"]);
  }
}
