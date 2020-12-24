import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetingsGpaPage } from './meetings-gpa.page';

describe('MeetingsGpaPage', () => {
  let component: MeetingsGpaPage;
  let fixture: ComponentFixture<MeetingsGpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingsGpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetingsGpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
