import { Component, HostListener, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("nav") public nav;
  public title = "Operation Turkey Meats";
  public isMobile: boolean;
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (window.pageYOffset > 150) {
      this.nav._elementRef.nativeElement.classList.add("hide");
    } else {
      this.nav._elementRef.nativeElement.classList.remove("hide");
    }
  }

  constructor(
    public router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      "menu",
      sanitizer.bypassSecurityTrustResourceUrl("assets/menu-24px.svg")
    );
  }

  ngOnInit() {
    if (window.innerWidth < 600) {
      this.isMobile = true;
    }
  }

  public redirectDonate() {
    console.log("HERE");
    this.router.navigate(["/donate"]);
  }
}
