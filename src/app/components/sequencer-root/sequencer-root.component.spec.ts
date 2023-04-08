import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequencerRootComponent } from './sequencer-root.component';

describe('SequencerRootComponent', () => {
  let component: SequencerRootComponent;
  let fixture: ComponentFixture<SequencerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequencerRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequencerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
