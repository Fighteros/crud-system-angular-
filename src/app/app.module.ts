import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'companies', component: CompaniesComponent },
  { path: 'employees', component: EmployeesComponent },
  // {path: '', component: }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    CompaniesComponent,
    HeaderComponent,
    HomeComponent,
    CompanyItemComponent,
    AddCompanyComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
