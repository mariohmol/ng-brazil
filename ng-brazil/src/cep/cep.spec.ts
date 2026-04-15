import { FormControl } from '@angular/forms';
import { cep } from './validator';
import { CEPPipe } from './pipe';
import { CEPValidator } from './directive';

describe('CEP Validator', () => {
  it('returns null for empty control', () => {
    expect(cep(new FormControl(''))).toBeNull();
  });

  it('returns null for valid CEP', () => {
    expect(cep(new FormControl('31.234-567'))).toBeNull();
  });

  it('returns error for invalid CEP', () => {
    expect(cep(new FormControl('3123456'))).toEqual({ cep: true });
  });
});

describe('CEP Pipe', () => {
  it('formats raw CEP correctly', () => {
    expect(new CEPPipe().transform('31234567')).toEqual('31.234-567');
  });
});

describe('CEP Directive', () => {
  it('is defined', () => {
    expect(CEPValidator).toBeDefined();
  });
});
