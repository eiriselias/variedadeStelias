import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionVenderComponent } from './accion-vender.component';

describe('AccionVenderComponent', () => {
  let component: AccionVenderComponent;
  let fixture: ComponentFixture<AccionVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionVenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
