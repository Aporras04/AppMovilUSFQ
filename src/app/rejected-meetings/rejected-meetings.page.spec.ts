import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RejectedMeetingsPage } from './rejected-meetings.page';

describe('RejectedMeetingsPage', () => {
  let component: RejectedMeetingsPage;
  let fixture: ComponentFixture<RejectedMeetingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedMeetingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RejectedMeetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
