import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pisos } from './pisos.page';

describe('Pisos', () => {
  let component: Pisos;
  let fixture: ComponentFixture<Pisos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pisos ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pisos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
