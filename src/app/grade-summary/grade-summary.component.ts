/**
 * Title: grade-summary.component.ts
 * Author: Danial Purselley
 * Date: 26 Nov 2022
 * Description: Basic gpa calc
 * app f/ web-425
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}
