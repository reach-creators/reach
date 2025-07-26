import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBrandComponent } from './signup-brand.component';

describe('SignupBrandComponent', () => {
  let component: SignupBrandComponent;
  let fixture: ComponentFixture<SignupBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
