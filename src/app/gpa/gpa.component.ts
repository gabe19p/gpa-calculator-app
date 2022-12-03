/**
 * Title: gpa.component.ts
 * Author: Danial Purselley
 * Date: 26 Nov 2022
 * Description: Basic gpa calc
 * app f/ web-425
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
