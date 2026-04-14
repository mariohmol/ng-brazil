import { FormControl } from '@angular/forms';
import { celular } from './validator';
import { CelularPipe } from './pipe';
import { CelularValidator } from './directive';

describe('Celular Validator', () => {
  it('returns null for empty control', () => {
    expect(celular(new FormControl(''))).toBeNull();
  });

  it('returns null for valid celular', () => {
    expect(celular(new FormControl('(31) 99999-9998'))).toBeNull();
  });

  it('returns error for invalid celular', () => {
    expect(celular(new FormControl('319'))).toEqual({ celular: true });
  });
});

describe('Celular Pipe', () => {
  it('formats raw celular correctly', () => {
    expect(new CelularPipe().transform('31999999998')).toEqual('(31) 99999-9998');
  });
});

describe('Celular Directive', () => {
  it('is defined', () => {
    expect(CelularValidator).toBeDefined();
  });
});
