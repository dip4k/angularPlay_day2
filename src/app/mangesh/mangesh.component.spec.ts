import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeshComponent } from './mangesh.component';

describe('MangeshComponent', () => {
  let component: MangeshComponent;
  let fixture: ComponentFixture<MangeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
