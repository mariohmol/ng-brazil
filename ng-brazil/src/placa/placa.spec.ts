import { FormControl } from '@angular/forms';
import { placa } from './validator';
import { PLACAPipe } from './pipe';
import { PLACAValidator } from './directive';

describe('Placa Validator', () => {
  it('returns null for empty control', () => {
    expect(placa(new FormControl(''))).toBeNull();
  });

  it('returns null for valid placa', () => {
    expect(placa(new FormControl('ADJ-5468'))).toBeNull();
  });

  it('returns error for invalid placa', () => {
    expect(placa(new FormControl('AEJ123'))).toEqual({ placa: true });
  });
});

describe('Placa Pipe', () => {
  it('formats raw placa correctly', () => {
    expect(new PLACAPipe().transform('ADJ5468')).toEqual('ADJ-5468');
  });
});

describe('Placa Directive', () => {
  it('is defined', () => {
    expect(PLACAValidator).toBeDefined();
  });
});
