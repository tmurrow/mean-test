import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.scss']
})
export class DisplayStudentsComponent implements OnInit {
students;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.students = this.route.snapshot.data.dataList.body;
    console.log(this.students);
  }

}
