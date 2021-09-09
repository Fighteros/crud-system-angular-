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
  showEditCompany!: boolean;
  subscription!: Subscription;
  @Output() onEditCompany: EventEmitter<Company> = new EventEmitter();

  constructor(private companyService: CompanyService, private uiService: UiService) {
  }

  ngOnInit(): void {
  }
  // @todo working on this


  editCompany(): void {
    this.showEditCompany = true;
  }

  onSaveCompany(): void {
    this.showEditCompany = false;
    this.onEditCompany.emit(this.company);
  }


}
