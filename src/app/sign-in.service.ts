/**
 * Title: sign-in.service.ts
 * Author: Danial Purselley
 * Date: 3 Dec 2022
 * Description: Basic gpa calc
 * app f/ web-425
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
