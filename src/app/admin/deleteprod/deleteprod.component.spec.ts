import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprodComponent } from './deleteprod.component';

describe('DeleteprodComponent', () => {
  let component: DeleteprodComponent;
  let fixture: ComponentFixture<DeleteprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteprodComponent]
    });
    fixture = TestBed.createComponent(DeleteprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
