import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface EmpDetails {
  id: number,
  fname: string,
  lname: string,
  email: string,
  dob: Date,
  gender: string,
  education: string,
  company: string,
  emp_id: number,
}

const EMP_DATA : EmpDetails[] = [
    {id: 1, fname: 'cibi', lname: 'sharan', email: 'cibi.mit@gmail.com', dob: new Date(2023,9,9), gender: 'Male', education: 'B.E Comp Science', company: 'Onward', emp_id: 12335},
    {id: 2, fname: 'cibi', lname: 'sharan', email: 'cibi.mit@gmail.com', dob: new Date(2023,9,9), gender: 'Male', education: 'B.E Comp Science', company: 'Onward', emp_id: 12335}
    // {id: 3, fname: 'cibi', lname: 'sharan', email: 'cibi.mit@gmail.com', dob: new Date(2023,9,9), gender: 'Male', education: 'B.E Comp Science', company: 'Onward', emp_id: 12335},
    // {id: 4, fname: 'cibi', lname: 'sharan', email: 'cibi.mit@gmail.com', dob: new Date(2023,9,9), gender: 'Male', education: 'B.E Comp Science', company: 'Onward', emp_id: 12335},
    // {id: 5, fname: 'cibi', lname: 'sharan', email: 'cibi.mit@gmail.com', dob: new Date(2023,9,9), gender: 'Male', education: 'B.E Comp Science', company: 'Onward', emp_id: 12335},
    // {id: 6, fname: 'cibi', lname: 'sharan', email: 'cibi.mit@gmail.com', dob: new Date(2023,9,9), gender: 'Male', education: 'B.E Comp Science', company: 'Onward', emp_id: 12335},
    // {id: 7, fname: 'cibi', lname: 'sharan', email: 'cibi.mit@gmail.com', dob: new Date(2023,9,9), gender: 'Male', education: 'B.E Comp Science', company: 'Onward', emp_id: 12335}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  constructor(){

  }
  showLifeCycle: boolean = false;
  value: string = 'cibi';
  title = 'EMS_App';
  //dataSource: MatTableDataSource<any> | undefined;
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'dob', 'gender', 'education', 'company', 'emp_id'];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = EMP_DATA;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatPaginator)
  // dataSource!: MatTableDataSource<Element>;
  // ngAfterViewInit(): void {
  //     this.dataSource.paginator = this.paginator;
  // }
  onShowOrHide() {
      this.showLifeCycle = !this.showLifeCycle;
  }

}
