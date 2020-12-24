import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConditionStudentPage } from './condition-student.page';

describe('ConditionStudentPage', () => {
  let component: ConditionStudentPage;
  let fixture: ComponentFixture<ConditionStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
