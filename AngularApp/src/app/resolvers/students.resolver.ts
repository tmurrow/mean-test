import { Injectable } from '@angular/core';
import { StudentApiService } from '.././services';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class StudentsResolver implements Resolve<any> {
  constructor(private studentService: StudentApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.studentService.getStudents();
  }
}
