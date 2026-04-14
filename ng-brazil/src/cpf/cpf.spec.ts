import { FormControl } from '@angular/forms';
import { cpf } from './validator';
import { CPFPipe } from './pipe';
import { CPFValidator } from './directive';

describe('CPF Validator', () => {
  it('returns null for empty control', () => {
    expect(cpf(new FormControl(''))).toBeNull();
  });

  it('returns null for valid CPF', () => {
    expect(cpf(new FormControl('156.631.881-50'))).toBeNull();
  });

  it('returns error for invalid CPF', () => {
    expect(cpf(new FormControl('156.631.881-51'))).toEqual({ cpf: true });
  });
});

describe('CPF Pipe', () => {
  it('formats raw CPF correctly', () => {
    expect(new CPFPipe().transform('15663188150')).toEqual('156.631.881-50');
  });
});

describe('CPF Directive', () => {
  it('is defined', () => {
    expect(CPFValidator).toBeDefined();
  });
});
