import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsComponent } from './grids.component';

describe('GridsComponent', () => {
  let component: GridsComponent;
  let fixture: ComponentFixture<GridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
