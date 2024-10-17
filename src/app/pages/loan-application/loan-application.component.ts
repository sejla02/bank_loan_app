import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  application: Application = new Application();
  loan: Loan = new Loan();

  masterService = inject(MasterService);

  addLoan() {
    debugger;
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj);
    this.application.Loans.unshift(newObj);
    this.loan = new Loan();
  }

  onSubmit() {
    debugger;
    this.masterService.addNewApplication(this.application).subscribe((res:APIResponseModel)=>{
      if(res.result) {
        alert("Loan success!");
      }
      else {
        // alert(res.message);
        alert("Submit failed");
      }
    }, error=>{
      alert(error);
    })
  }

}
