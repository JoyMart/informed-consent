import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-climate-action',
  templateUrl: './climate-action.component.html',
  styleUrls: ['./climate-action.component.scss']
})
export class ClimateActionComponent implements OnInit {
  climateData: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    return this.climateData = [
      {title: 'On Fire: The Burning Case for a Green New Deal', description: 'An instant bestseller, On Fire shows Klein at her most prophetic and philosophical, investigating the climate crisis not only as a profound political challenge but also as a spiritual and imaginative one. Delving into topics ranging from the clash between ecological time and our culture of “perpetual now,” to the soaring history of humans changing and evolving rapidly in the face of grave threats, to rising white supremacy and fortressed borders as a form of “climate barbarism,” this is a rousing call to action for a planet on the brink.\n' +
          '\n' +
          'An expansive, far-ranging exploration that sees the battle for a greener world as indistinguishable from the fight for our lives, On Fire captures the burning urgency of the climate crisis, as well as the fiery energy of a rising political movement demanding a catalytic Green New Deal.'}
    ]
  }

}
