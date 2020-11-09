import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Alvenaria } from './alvenaria.page';

describe('Alvenaria', () => {
  let component: Alvenaria;
  let fixture: ComponentFixture<Alvenaria>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alvenaria ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Alvenaria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
