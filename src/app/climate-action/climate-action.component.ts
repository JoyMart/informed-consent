import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-climate-action',
  templateUrl: './climate-action.component.html',
  styleUrls: ['./climate-action.component.scss']
})
export class ClimateActionComponent implements OnInit {
  climateData: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getData() {
    return this.http.get("https://data.epa.gov/efservice/tri_facility/state_abbr/VA/JSON").subscribe(
      data => {
        console.log(data)
        data = this.climateData
      }
    );
  }

}
