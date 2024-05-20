import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer_interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer | null = null;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  showDetails(customer: Customer) {
    this.selectedCustomer = customer;
  }
}
