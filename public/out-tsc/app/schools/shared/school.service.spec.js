import { TestBed, async, inject } from "@angular/core/testing";
import { SchoolService } from "./school.service";
import { Http, BaseRequestOptions, RequestMethod, Response } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { environment } from "../../../environments/environment";
import { mockSchools } from "./schools.mock";
describe('SchoolService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SchoolService, {
                    provide: Http,
                    useFactory: function (mockBackend, options) { return new Http(mockBackend, options); },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend,
                BaseRequestOptions],
        });
    });
    it('should get list of schools', async(inject([SchoolService, MockBackend], function (service, backend) {
        expect(service).toBeTruthy();
        backend.connections.subscribe(function (c) {
            expect(c.request.method).toBe(RequestMethod.Get);
            expect(c.request.url).toBe(environment.apiEndpoint + "/schools");
            c.mockRespond(new Response({
                body: mockSchools
            }));
        });
        service.schoolsObservable().subscribe(function (schools) {
            expect(schools).toBeTruthy();
            expect(schools.length).toBeGreaterThan(0);
        });
        service.getSchools();
    })));
    it('should get current school', async(inject([SchoolService, MockBackend], function (service) {
        expect(service).toBeTruthy();
        var school = {
            id: 'eae00a58-9bd2-4a73-baec-02c656010131',
            name: 'Worcester Polytechnic Institute',
            acronym: 'WPI'
        };
        service.currentSchoolObservable().subscribe(function (school) {
            expect(school).toBeTruthy();
            expect(school).toEqual(school);
        });
        service.setCurrentSchool(school);
    })));
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/shared/school.service.spec.js.map