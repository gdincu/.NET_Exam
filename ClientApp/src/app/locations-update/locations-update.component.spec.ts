import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsUpdateComponent } from './locations-update.component';

describe('LocationsUpdateComponent', () => {
  let component: LocationsUpdateComponent;
  let fixture: ComponentFixture<LocationsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
