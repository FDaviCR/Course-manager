import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component( {
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS8877',
                duration: 120,
                rating: 5.8
            },
            {
                id: 2,
                name: 'Angular: HTML',
                imageUrl: '',
                price: 45.99,
                code: 'XPS8867',
                duration: 320,
                rating: 5.0
            }
        ]
    }
}