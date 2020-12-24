import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoMeetingPage } from './info-meeting.page';

describe('InfoMeetingPage', () => {
  let component: InfoMeetingPage;
  let fixture: ComponentFixture<InfoMeetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMeetingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoMeetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
