/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { CourseService } from './course.service';
import { Http, BaseRequestOptions, Response, RequestMethod } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { environment } from "../../../../environments/environment";
import { mockCourses } from "./courses.mock";
describe('CourseService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CourseService, {
                    provide: Http,
                    useFactory: function (mockBackend, options) { return new Http(mockBackend, options); },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend,
                BaseRequestOptions],
        });
    });
    it('should get list of courses under specific school', inject([CourseService, MockBackend], function (service, backend) {
        expect(service).toBeTruthy();
        backend.connections.subscribe(function (c) {
            expect(c.request.method).toBe(RequestMethod.Get);
            expect(c.request.url).toContain(environment.apiEndpoint + "/schools/eae00a58-9bd2-4a73-baec-02c656010131/courses");
            c.mockRespond(new Response({
                body: mockCourses
            }));
            service.coursesObservable().subscribe(function (courses) {
                expect(courses).toBeTruthy();
                expect(courses.length).toBeGreaterThan(0);
            });
            service.getCourses('eae00a58-9bd2-4a73-baec-02c656010131');
        });
    }));
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/shared/course.service.spec.js.map