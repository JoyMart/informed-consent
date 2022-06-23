import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_timeLine from "highcharts/modules/timeline";

HC_timeLine(Highcharts);

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {}; // Required
  updateFlag: boolean = false;
  oneToOneFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'timeline',
        inverted: true,
      },
      title: {
        text: 'Timeline of the Americas (1400 - Present)'
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      series: [{
        type: 'timeline',
        data: [{
          x: 1,
          name: 'Natives',
          label: '1400: approximately 8 million Natives lived in the Americas',
          description: 'Before Spain sent Columbus to colonize "new" lands, Native populations lived everywhere in the Americas.' +
            'Many nations had cooperative relationships with nearby nations and there were complex trade routes from both continents.' +
            'As Columbus wrote in his letters, these people were kind, generous, and did not care about money or gold. '
        }, {
          x: 2,
          name: 'Colonial Arrival',
          label: '1492: First colonizers arrive',
          description: 'We all know the poem, but do we know the historical context, and the actions the Conquistadors took in the "new" land?' +
            'A great resource to understand more about this horrific time is \'A People\'s History of the United States of America\' (pages 1-1). '
        }, {
          x: 3,
          name: 'First human spaceflight',
          label: '1961: First human spaceflight (Yuri Gagarin)',
          description: 'First human spaceflight (Yuri Gagarin), and the first human-crewed orbital flight'
        }, {
          x: 4,
          name: 'First human on the Moon',
          label: '1969: First human on the Moon',
          description: 'First human on the Moon, and first space launch from a celestial body other than the Earth. First sample return from the Moon'
        }]
      }]
    };

  }
}
