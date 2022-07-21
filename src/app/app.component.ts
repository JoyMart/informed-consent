import {Component, OnInit} from '@angular/core';
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InformedConsent';
  faDiscord = faDiscord;
  faTiktok = faTiktok;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {label: 'Home Page', link: './home', index: 0},
      {label: 'History Timeline', link: './history', index: 1},
      {label: 'Climate Action', link: './climate-change', index: 2},
      {label: 'Modern Racism', link: './racism', index: 3},
      {label: 'Our Book Club', link: './home', index: 4},
      {label: 'Current Protests', link: './home', index: 5},
      {label: 'Political Terminology', link: './terminology', index: 6},
      {label: 'External Links', link: './home', index: 7},
      {label: 'C-Span', link: './cspan', index: 8},
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((result) => {
      this.activeLinkIndex = this.navLinks
        .indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    })
  }

}
