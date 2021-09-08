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

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'companies', component: CompaniesComponent },
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
