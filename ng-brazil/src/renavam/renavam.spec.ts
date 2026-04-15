import { FormControl } from '@angular/forms';
import { renavam } from './validator';
import { RenavamPipe } from './pipe';
import { RenavamValidator } from './directive';

describe('Renavam Validator', () => {
  it('returns null for empty control', () => {
    expect(renavam(new FormControl(''))).toBeNull();
  });

  it('returns null for valid renavam', () => {
    expect(renavam(new FormControl('1234567890-0'))).toBeNull();
  });

  it('returns error for invalid renavam', () => {
    expect(renavam(new FormControl('12345678901'))).toEqual({ renavam: true });
  });
});

describe('Renavam Pipe', () => {
  it('formats raw renavam correctly', () => {
    expect(new RenavamPipe().transform('12345678900')).toEqual('1234567890-0');
  });
});

describe('Renavam Directive', () => {
  it('is defined', () => {
    expect(RenavamValidator).toBeDefined();
  });
});
