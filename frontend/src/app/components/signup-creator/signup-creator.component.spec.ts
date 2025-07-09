import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCreatorComponent } from './signup-creator.component';

describe('SignupCreatorComponent', () => {
  let component: SignupCreatorComponent;
  let fixture: ComponentFixture<SignupCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
