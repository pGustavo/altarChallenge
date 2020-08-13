import {Component, OnInit} from '@angular/core';
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  code = 0;
  result = [];
  data;
  paymentValue = '';
  ammountValue = '';

  constructor(private service: CommonService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.service.getData().subscribe(res => {
        if(this.result.length === 0) {
        this.result = res;
        } else {

        }
        this.code = this.result[this.result.length - 1].code;
      });
    }, 2000);
  }

  addPaymentValue() {
    const selectedRes = this.result.find(x => x.name === this.paymentValue  );
    selectedRes.ammount = this.ammountValue;
  }
}
