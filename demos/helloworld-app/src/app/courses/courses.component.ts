import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public isActive: boolean = false;
  public ourCourses: Course[];

  constructor() { 

    this.ourCourses = [
        new Course(1, 'Angular', 'Vishal', '5 Days'),
        new Course(2, 'React', 'Faris', '8 Days'),
        new Course(3, 'Java', 'Lamya', '2 Days'),
        new Course(4, 'Spring', 'Maram', '10 Days')
      ]
  }

  ngOnInit(): void {
  }

}
