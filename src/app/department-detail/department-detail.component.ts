import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;


  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    // let id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._route.paramMap.subscribe((params: ParamMap) => this.departmentId = parseInt(params.get('id')));
    // this.departmentId = id;
  }

  onPrevious() {
    let previousId = this.departmentId - 1;
    this._router.navigate(['/departments', previousId]);
  }

  onNext() {
    let nextId = this.departmentId + 1;
    this._router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this._router.navigate(['/departments', { id: selectedId }]);
    this._router.navigate(['../', { id: selectedId }], { relativeTo: this._route });
  }

  showOverview() {
    this._router.navigate(['overview'], { relativeTo: this._route });
  }

  showContact() {
    this._router.navigate(['contact'], { relativeTo: this._route });
  }
}
