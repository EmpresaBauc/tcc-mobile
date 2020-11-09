import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Revestimentos } from './revestimentos.page';

describe('Revestimentos', () => {
  let component: Revestimentos;
  let fixture: ComponentFixture<Revestimentos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Revestimentos ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Revestimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
