/* tslint:disable:no-unused-variable */
import { TermPipe } from './term-year.pipe';
import { Term } from "../../../shared/term.enum";
describe('TermPipe', function () {
    it('should translate enum to term string', function () {
        var pipe = new TermPipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform(Term.A)).toEqual('A');
        expect(pipe.transform(Term.B)).toEqual('B');
        expect(pipe.transform(Term.C)).toEqual('C');
        expect(pipe.transform(Term.D)).toEqual('D');
        expect(pipe.transform(Term.E)).toEqual('E');
        expect(pipe.transform(Term.F)).toEqual('F');
    });
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/schools/courses/shared/term-year.pipe.spec.js.map