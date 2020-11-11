import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course.model';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  @Input()
  public course: Course;

  @Output()
  public onSelectCourse: EventEmitter<Course>;

  constructor() { 
    this.onSelectCourse = new EventEmitter();
  }

  ngOnInit(): void {
  }

  handleEnrollClick(){
    this.onSelectCourse.emit(this.course);
  }

}
