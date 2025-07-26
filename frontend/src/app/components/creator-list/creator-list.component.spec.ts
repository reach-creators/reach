import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListComponent } from './creator-list.component';

describe('CreatorListComponent', () => {
  let component: CreatorListComponent;
  let fixture: ComponentFixture<CreatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
