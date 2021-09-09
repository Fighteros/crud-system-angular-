import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyService } from 'src/app/services/company.service';
import { UiService } from 'src/app/services/ui.service';
import { Company } from '../../Comapny';


@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {

  @Input() company!: Company;
  oldCompanyName!: string;
  showEditCompany!: boolean;
  subscription!: Subscription;
  @Output() onEditCompany: EventEmitter<Company> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
  // @todo working on this


  editCompany(): void {
    this.oldCompanyName = this.company.companyName;
    this.showEditCompany = true;
  }

  onSaveCompany(): void {
    this.showEditCompany = false;
    this.onEditCompany.emit(this.company);
  }
  onCancel(): void {
    this.company.companyName = this.oldCompanyName;
    this.showEditCompany = false;
  }


}
