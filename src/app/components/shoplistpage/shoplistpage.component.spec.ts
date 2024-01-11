import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplistpageComponent } from './shoplistpage.component';

describe('ShoplistpageComponent', () => {
  let component: ShoplistpageComponent;
  let fixture: ComponentFixture<ShoplistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoplistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoplistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
