import { async, TestBed } from '@angular/core/testing';
import { CourseRowComponent } from './course-row.component';
describe('CourseRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CourseRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CourseRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/course-row/course-row.component.spec.js.map