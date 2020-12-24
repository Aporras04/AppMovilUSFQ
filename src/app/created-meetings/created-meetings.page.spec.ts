import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatedMeetingsPage } from './created-meetings.page';

describe('CreatedMeetingsPage', () => {
  let component: CreatedMeetingsPage;
  let fixture: ComponentFixture<CreatedMeetingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedMeetingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatedMeetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
