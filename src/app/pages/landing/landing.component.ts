import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  numberOfDaysAtHospital;
  bedType;
  privateBedTypes = privatePricing;
  publicBedTypes = publicPricing;

  constructor() {}

  ngOnInit(): void {}
}

const privatePricing = {
  'General Bed': 10000,
  HDU: 12000,
  'Isolation ICU with ventilator': 25000,
  'Isolation ICU without ventilator': 15000,
};

const publicPricing = {
  'General Bed': 5200,
  HDU: 7000,
  'Isolation ICU with ventilator': 8500,
  'Isolation ICU without ventilator': 10000,
};
