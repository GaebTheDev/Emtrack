import { Component } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { User } from '../../../interfaces/auth';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  company: any = undefined;
  companyOwner: any = undefined;

  constructor(private companyService: CompanyService) {
    this.companyService.getCompany().subscribe(
      res => {
        this.company = res;
        this.company = this.company[0];
        console.log(this.company);

        this.companyService.getCompanyOwner(this.company.ownerid).subscribe(
          res => {
            this.companyOwner = res as User;
            this.companyOwner = this.companyOwner[0];
            console.log(this.companyOwner);
          },
          err => { console.log(err) },
        )

      },
      err => { console.log(err) }
    );

  }



}
