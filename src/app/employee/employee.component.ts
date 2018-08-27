import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  columnSpan:number=2;
  firstname:string = 'Shafiq';
  lastname:string = 'Tahir';
  gender:string = 'Male';
  age:number = 26;
  showDetails:boolean = false;

  toggleDetails():void {
    this.showDetails = !this.showDetails;
  }


  constructor() { }

  ngOnInit() {
  }

}
