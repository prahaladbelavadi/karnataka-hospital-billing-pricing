import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  numberOfDaysAtHospital;
  bedType;
  bedTypes = obj;
  constructor() {}

  ngOnInit(): void {}
}

const obj = {
  'General Bed': 10000,
  HDU: 12000,
  'Isolation ICU with ventilator': 25000,
  'Isolation ICU without ventilator': 15000,
};
