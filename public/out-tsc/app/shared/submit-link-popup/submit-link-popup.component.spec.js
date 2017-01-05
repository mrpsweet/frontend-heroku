import { async, TestBed } from '@angular/core/testing';
import { SubmitLinkPopupComponent } from './submit-link-popup.component';
describe('SubmitLinkPopupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SubmitLinkPopupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SubmitLinkPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/submit-link-popup/submit-link-popup.component.spec.js.map