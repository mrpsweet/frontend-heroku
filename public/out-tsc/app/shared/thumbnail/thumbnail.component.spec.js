import { async, TestBed } from '@angular/core/testing';
import { ThumbnailComponent } from './thumbnail.component';
describe('ThumbnailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ThumbnailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ThumbnailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/harryliu/Documents/projects/cover/frontend/src/app/shared/thumbnail/thumbnail.component.spec.js.map