import { FormControl } from '@angular/forms';
import { titulo } from './validator';
import { TITULOPipe } from './pipe';
import { TITULOValidator } from './directive';

describe('Titulo Validator', () => {
  it('returns null for empty control', () => {
    expect(titulo(new FormControl(''))).toBeNull();
  });

  it('returns null for valid titulo', () => {
    expect(titulo(new FormControl('205395880302'))).toBeNull();
  });

  it('returns error for invalid titulo', () => {
    expect(titulo(new FormControl('205395880384'))).toEqual({ titulo: true });
  });
});

describe('Titulo Pipe', () => {
  it('formats raw titulo correctly', () => {
    expect(new TITULOPipe().transform('205395880302')).toEqual('2053.9588.0302');
  });
});

describe('Titulo Directive', () => {
  it('is defined', () => {
    expect(TITULOValidator).toBeDefined();
  });
});
