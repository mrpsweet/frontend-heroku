import { async, TestBed } from '@angular/core/testing';
import { CircularLoaderComponent } from './circular-spinner.component';
describe('CircularLoaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CircularLoaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CircularLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/circular-spinner/circular-spinner.component.spec.js.map