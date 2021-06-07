import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtualizarLancamentoModalComponent } from './atualizar-lancamento-modal.component';

describe('AtualizarLancamentoModalComponent', () => {
  let component: AtualizarLancamentoModalComponent;
  let fixture: ComponentFixture<AtualizarLancamentoModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarLancamentoModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizarLancamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
