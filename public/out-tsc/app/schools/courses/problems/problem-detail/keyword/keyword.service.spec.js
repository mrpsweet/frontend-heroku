/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { KeywordService } from './keyword.service';
describe('KeywordService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [KeywordService]
        });
    });
    it('should get list of keywords', inject([KeywordService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/problems/problem-detail/keyword/keyword.service.spec.js.map