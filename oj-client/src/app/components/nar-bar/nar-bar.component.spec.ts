import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarBarComponent } from './nar-bar.component';

describe('NarBarComponent', () => {
  let component: NarBarComponent;
  let fixture: ComponentFixture<NarBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
