import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departmentList = [
    { "id": 1, "name": "C" },
    { "id": 2, "name": "C++" },
    { "id": 3, "name": "JavaScript" },
    { "id": 4, "name": "Android" },
    { "id": 5, "name": "iOS" },
  ];

  public selectedId: number;


  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => this.selectedId = parseInt(params.get('id')))
  }

  onSelect(department) {
    console.log(department);
    this._router.navigate(['/departments', department.id])
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
