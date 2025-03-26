import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBerComponent } from './menu-ber.component';

describe('MenuBerComponent', () => {
  let component: MenuBerComponent;
  let fixture: ComponentFixture<MenuBerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
