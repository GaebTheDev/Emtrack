import { Component } from '@angular/core';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  constructor(private companyService: CompanyService) {
    this.companyService.getCompany().subscribe(
      res => {
        this.company = res;
        this.company = this.company[0];
        console.log(this.company);
      },
      err => { console.log(err) }
    )
  }

  company: any = undefined;

}
