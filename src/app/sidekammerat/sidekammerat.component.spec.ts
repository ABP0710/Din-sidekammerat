import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidekammeratComponent } from './sidekammerat.component';

describe('SidekammeratComponent', () => {
  let component: SidekammeratComponent;
  let fixture: ComponentFixture<SidekammeratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidekammeratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidekammeratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
