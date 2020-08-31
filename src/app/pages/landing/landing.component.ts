import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public private_billingData: BillingData[] = PrivateBillingData;

  constructor() {}

  ngOnInit(): void {}
}

interface BillingData {
  requirement: string;
  admissionCategory: string;
  generalWard: number;
  twinSharing: number;
  privateWard: number;
  suiteWard: number;
}

const PrivateBillingData: any[] = [
  {
    requirement: 'Monitoring in Hospital',
    admissionCategory: 'Covid Routine',
    generalWard: '10000',
    twinSharing: '11000',
    privateWard: '12500',
    suiteWard: 'As per Hospital Tariff',
  },
  {
    requirement: 'Pre ICU Severity',
    admissionCategory: 'Covid HDU / Oxygen flow',
    generalWard: '12000',
    twinSharing: '13000',
    privateWard: '15000',
    suiteWard: 'As per Hospital Tariff',
  },
  {
    requirement: 'ICU Level',
    admissionCategory: 'Covid ICU without ventilator',
    generalWard: '15000',
    twinSharing: '16500',
    privateWard: '18750',
    suiteWard: 'As per Hospital Tariff',
  },
  {
    requirement: 'Ventilator',
    admissionCategory: 'Covid ICU with ventilator',
    generalWard: '25000',
    twinSharing: '27500',
    privateWard: '31250',
    suiteWard: 'As per Hospital Tariff',
  },
];

const PublicBillingData: any[] = [
  {
    requirement: 'Monitoring in Hospital',
    admissionCategory: 'Covid Routine',
    generalWard: '10000',
    twinSharing: '11000',
    privateWard: '12500',
    suiteWard: 'As per Hospital Tariff',
  },
  {
    requirement: 'Pre ICU Severity',
    admissionCategory: 'Covid HDU / Oxygen flow',
    generalWard: '12000',
    twinSharing: '13000',
    privateWard: '15000',
    suiteWard: 'As per Hospital Tariff',
  },
  {
    requirement: 'ICU Level',
    admissionCategory: 'Covid ICU without ventilator',
    generalWard: '15000',
    twinSharing: '16500',
    privateWard: '18750',
    suiteWard: 'As per Hospital Tariff',
  },
  {
    requirement: 'Ventilator',
    admissionCategory: 'Covid ICU with ventilator',
    generalWard: '25000',
    twinSharing: '27500',
    privateWard: '31250',
    suiteWard: 'As per Hospital Tariff',
  },
];
