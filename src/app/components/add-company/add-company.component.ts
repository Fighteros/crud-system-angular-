import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/Comapny';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})


export class AddCompanyComponent implements OnInit {
  @Input() companyName!: string;
  @Output() onAddCompany: EventEmitter<Company> = new EventEmitter();
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }


  addCompany(): void {
    const fakeCompanyId = Math.floor(Math.random() * 10000 + 1)
    const newCompany = {
      id: fakeCompanyId,
      companyName: this.companyName,
      employees: [],
    }

    // this will be emitted instead
    // this.companyService.addCompany(newCompany).subscribe()
    this.onAddCompany.emit(newCompany);

    this.companyName = '';
  }
}
