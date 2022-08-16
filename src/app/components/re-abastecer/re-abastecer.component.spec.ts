import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReAbastecerComponent } from './re-abastecer.component';

describe('ReAbastecerComponent', () => {
  let component: ReAbastecerComponent;
  let fixture: ComponentFixture<ReAbastecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReAbastecerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReAbastecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
