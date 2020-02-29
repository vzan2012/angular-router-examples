import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departmentList = [
    {"id": 1, "name": "C"},
    {"id": 2, "name": "C++"},
    {"id": 3, "name": "JavaScript"},
    {"id": 4, "name": "Android"},
    {"id": 5, "name": "iOS"},
  ];


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department) {
    console.log(department);
    this._router.navigate(['/departments',department.id])
  }

}
