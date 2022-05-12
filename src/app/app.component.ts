import { Component } from '@angular/core';
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InformedConsent';
  faDiscord = faDiscord;
  faTiktok = faTiktok;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

}
