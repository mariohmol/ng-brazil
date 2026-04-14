import { FormControl } from '@angular/forms';
import { cnpj } from './validator';
import { CNPJPipe } from './pipe';
import { CNPJValidator } from './directive';

describe('CNPJ Validator', () => {
  it('returns null for empty control', () => {
    expect(cnpj(new FormControl(''))).toBeNull();
  });

  it('returns null for valid CNPJ', () => {
    expect(cnpj(new FormControl('40.841.253/0001-02'))).toBeNull();
  });

  it('returns error for invalid CNPJ', () => {
    expect(cnpj(new FormControl('40841253000101'))).toEqual({ cnpj: true });
  });
});

describe('CNPJ Pipe', () => {
  it('formats raw CNPJ correctly', () => {
    expect(new CNPJPipe().transform('40841253000102')).toEqual('40.841.253/0001-02');
  });
});

describe('CNPJ Directive', () => {
  it('is defined', () => {
    expect(CNPJValidator).toBeDefined();
  });
});
