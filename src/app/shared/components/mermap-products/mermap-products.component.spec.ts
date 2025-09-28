import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermapProductsComponent } from './mermap-products.component';

describe('MermapProductsComponent', () => {
  let component: MermapProductsComponent;
  let fixture: ComponentFixture<MermapProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MermapProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MermapProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
