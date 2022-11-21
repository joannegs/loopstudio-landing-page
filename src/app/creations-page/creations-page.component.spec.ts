import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsPageComponent } from './creations-page.component';

describe('CreationsPageComponent', () => {
  let component: CreationsPageComponent;
  let fixture: ComponentFixture<CreationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
