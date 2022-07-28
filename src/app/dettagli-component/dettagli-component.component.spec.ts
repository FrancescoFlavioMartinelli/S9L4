import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliComponentComponent } from './dettagli-component.component';

describe('DettagliComponentComponent', () => {
  let component: DettagliComponentComponent;
  let fixture: ComponentFixture<DettagliComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
