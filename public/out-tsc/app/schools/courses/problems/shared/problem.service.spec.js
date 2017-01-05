import { TestBed, inject, async } from "@angular/core/testing";
import { ProblemService } from "./problem.service";
import { Http, BaseRequestOptions, Response, RequestMethod } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { mockProblems } from "./problem.mock";
import { environment } from "../../../../../environments/environment";
describe('ProblemService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ProblemService, {
                    provide: Http,
                    useFactory: function (mockBackend, options) { return new Http(mockBackend, options); },
                    deps: [MockBackend, BaseRequestOptions]
                }, MockBackend, BaseRequestOptions]
        });
    });
    it('should get problems list', async(inject([ProblemService, MockBackend], function (service, backend) {
        backend.connections.subscribe(function (c) {
            expect(c.request.method).toEqual(RequestMethod.Get);
            expect(c.request.url).toEqual(environment.apiEndpoint + "\n        /schools/3f456176-62fa-4f53-929e-1652d29770fb\n        /courses/1be5da90-d14e-4853-ba6f-2a3289883b71\n        /problems");
            c.mockRespond(new Response({
                body: mockProblems
            }));
        });
        service.problems.subscribe(function (problems) {
            expect(problems);
            expect(problems.length).toBeGreaterThan(0);
        });
        service.getProblems();
    })));
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/shared/problem.service.spec.js.map