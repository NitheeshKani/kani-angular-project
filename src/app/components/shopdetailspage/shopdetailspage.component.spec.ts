import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailspageComponent } from './shopdetailspage.component';

describe('ShopdetailspageComponent', () => {
  let component: ShopdetailspageComponent;
  let fixture: ComponentFixture<ShopdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopdetailspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
