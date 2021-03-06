import { Component, OnInit, Output } from '@angular/core';
import { Company } from '../../Comapny';
import { CompanyService } from 'src/app/services/company.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companyList: Company[] = [];
  showAddCompanyState!: boolean;
  subscription!: Subscription;

  constructor(private companyService: CompanyService, private uiservice: UiService) {
    this.subscription = this.uiservice.onToggleAdd().subscribe((value) => (this.showAddCompanyState = value))
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies) => (this.companyList = companies));
  }


  showAddCompany(): void {
    this.uiservice.toggleShowAddCompany()
  }

  addCompany(company: Company): void {
    this.companyService.addCompany(company).subscribe((company) => (this.companyList.push(company)))
  }

  editCompany(company: Company) {
    this.companyService.editCompany(company).subscribe();
  }

  deleteCompany(company: Company) {
    this.companyService.deleteCompany(company).subscribe(() => (
      this.companyList = this.companyList.filter(t => (
        t.id !== company.id
      ))
    ))
  }

}
