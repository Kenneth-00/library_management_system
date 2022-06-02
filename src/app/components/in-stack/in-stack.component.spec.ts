import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InStackComponent } from './in-stack.component';

describe('InStackComponent', () => {
  let component: InStackComponent;
  let fixture: ComponentFixture<InStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
