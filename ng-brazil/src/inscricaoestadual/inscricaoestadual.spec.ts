import { FormControl } from '@angular/forms';
import { inscricaoestadual } from './validator';
import { InscricaoEstadualPipe } from './pipe';
import { InscricaoEstadualValidator } from './directive';

describe('InscricaoEstadual Validator', () => {
  const estado = 'sp';

  it('returns null for empty control', () => {
    expect(inscricaoestadual(estado)(new FormControl(''))).toBeNull();
  });

  it('returns null for valid inscricao estadual (SP)', () => {
    expect(inscricaoestadual(estado)(new FormControl('114.814.878.119'))).toBeNull();
  });

  it('returns error for invalid inscricao estadual (SP)', () => {
    expect(inscricaoestadual(estado)(new FormControl('114.814.878.110'))).toEqual({ inscricaoestadual: true });
  });
});

describe('InscricaoEstadual Pipe', () => {
  it('formats raw inscricao estadual correctly (SP)', () => {
    expect(new InscricaoEstadualPipe().transform('114814878119', 'sp')).toEqual('114.814.878.119');
  });
});

describe('InscricaoEstadual Directive', () => {
  it('is defined', () => {
    expect(InscricaoEstadualValidator).toBeDefined();
  });
});
