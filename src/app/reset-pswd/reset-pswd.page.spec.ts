import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetPswdPage } from './reset-pswd.page';

describe('ResetPswdPage', () => {
  let component: ResetPswdPage;
  let fixture: ComponentFixture<ResetPswdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPswdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPswdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
