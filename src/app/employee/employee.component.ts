import { Component, OnInit} from '@angular/core';
import { DataTableComponent } from '../shared/data-table/data-table.component';

export interface PeriodicElement {
  fname: string;
  studentID: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  checkHeader(data) {
    if(data == 'studentID'){
      console.log('stud')
      return 'Student ID';
    }else{
      console.log('false')
      return 'INVALID DATA';
    }
  }

  columnHeader = {'studentID': 'ID', 'fname': 'First Name', 'lname': 'Last Name', 'weight': 'Weight', 'symbol': 'Code'};


  tableData: PeriodicElement[] = [
    {studentID: 1, fname: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {studentID: 2, fname: 'Helium', weight: 4.0026, symbol: 'He'},
    {studentID: 3, fname: 'Lithium', weight: 6.941, symbol: 'Li'},
    {studentID: 4, fname: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {studentID: 5, fname: 'Boron', weight: 10.811, symbol: 'B'},
    {studentID: 6, fname: 'Carbon', weight: 12.0107, symbol: 'C'},
    {studentID: 7, fname: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {studentID: 8, fname: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {studentID: 9, fname: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {studentID: 10, fname: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

}