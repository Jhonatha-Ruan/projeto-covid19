import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    myCustomScrollbar: any;
  constructor() { }

  ngOnInit() {
      const self = this;
      this.myCustomScrollbar = document.getElementsByClassName('my-custom-scrollbar');
      // tslint:disable-next-line:forin
      for (const item in self.myCustomScrollbar) {
          const ps = new PerfectScrollbar(self.myCustomScrollbar[item]);

          const scrollbarY = self.myCustomScrollbar[item].querySelector('.ps__rail-y');

          self.myCustomScrollbar[item].onscroll = function () {
              scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
          }
      };
  }


  data: SimpleDataModel[] = [
    {
      name: "1ª dose: 180.603.530",
      value: "18"
    },
    {
      name: "2ª e única: 171.112.772",
      value: "17"
    },
    {
      name: "3ª dose: 115.289.886",
      value: "12"
    },
    {
      name: "Recuperados: 27.381.416",
      value: "6"
    },
    {
      name: "Total de doses: 467.006.188",
      value: "47"
    },
  ];
}

export interface SimpleDataModel {
  name: string;
  value: string;
  color?: string;
}

