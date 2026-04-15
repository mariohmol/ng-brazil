import { FormControl } from '@angular/forms';
import { telefone } from './validator';
import { TelefonePipe } from './pipe';
import { TelefoneValidator } from './directive';

describe('Telefone Validator', () => {
  it('returns null for empty control', () => {
    expect(telefone(new FormControl(''))).toBeNull();
  });

  it('returns null for valid telefone', () => {
    expect(telefone(new FormControl('(31) 9999-9998'))).toBeNull();
  });

  it('returns error for invalid telefone', () => {
    expect(telefone(new FormControl('319999999'))).toEqual({ telefone: true });
  });
});

describe('Telefone Pipe', () => {
  it('formats raw telefone correctly', () => {
    expect(new TelefonePipe().transform('3199999998')).toEqual('(31) 9999-9998');
  });
});

describe('Telefone Directive', () => {
  it('is defined', () => {
    expect(TelefoneValidator).toBeDefined();
  });
});
