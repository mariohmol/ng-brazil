import { FormControl } from '@angular/forms';
import { currency } from './validator';
import { CURRENCYPipe } from './pipe';
import { CURRENCYValidator } from './directive';

describe('Currency Validator', () => {
  it('returns null for empty control', () => {
    expect(currency(new FormControl(''))).toBeNull();
  });

  it('returns null for valid currency', () => {
    expect(currency(new FormControl('R$ 1.234,56'))).toBeNull();
  });

  it('returns error for invalid currency', () => {
    expect(currency(new FormControl('R$1000.10'))).toEqual({ currency: true });
  });
});

describe('Currency Pipe', () => {
  it('formats raw currency correctly', () => {
    expect(new CURRENCYPipe().transform('1234,56', undefined)).toEqual('R$ 1.234,56');
  });
});

describe('Currency Directive', () => {
  it('is defined', () => {
    expect(CURRENCYValidator).toBeDefined();
  });
});
