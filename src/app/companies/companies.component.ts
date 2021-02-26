import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { COMPANIES } from '../mock-companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = COMPANIES;
  selectedCompany?: Company;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Company): void {
    this.selectedCompany = hero;
  }
  numberOfCargoBays(boxes: string): number {
    return Math.ceil(boxes.split(',').map(x => +x).reduce((a, b) => a + b, 0) / 10);
  }
}
