import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pintura } from './pintura.page';

describe('Pintura', () => {
  let component: Pintura;
  let fixture: ComponentFixture<Pintura>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pintura ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pintura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
