import { FormControl } from '@angular/forms';
import { pispasep } from './validator';
import { PispasepPipe } from './pipe';
import { PispasepValidator } from './directive';

describe('PisPasep Validator', () => {
  it('returns null for empty control', () => {
    expect(pispasep(new FormControl(''))).toBeNull();
  });

  it('returns null for valid pispasep', () => {
    expect(pispasep(new FormControl('12345678919'))).toBeNull();
  });

  it('returns error for invalid pispasep', () => {
    expect(pispasep(new FormControl('12345678918'))).toEqual({ pispasep: true });
  });
});

describe('PisPasep Pipe', () => {
  it('formats raw pispasep correctly', () => {
    expect(new PispasepPipe().transform('12345678919')).toEqual('123.45678.91-9');
  });
});

describe('PisPasep Directive', () => {
  it('is defined', () => {
    expect(PispasepValidator).toBeDefined();
  });
});
