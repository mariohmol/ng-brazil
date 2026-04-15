import { FormControl } from '@angular/forms';
import { percentage } from './validator';
import { PERCENTAGEPipe } from './pipe';
import { PERCENTAGEValidator } from './directive';

describe('Percentage Validator', () => {
  it('returns null for empty control', () => {
    expect(percentage(new FormControl(''))).toBeNull();
  });

  it('returns null for valid percentage', () => {
    expect(percentage(new FormControl('50,00%'))).toBeNull();
  });
});

describe('Percentage Pipe', () => {
  it('formats raw percentage correctly', () => {
    expect(new PERCENTAGEPipe().transform('50,00', undefined)).toEqual('50,00%');
  });
});

describe('Percentage Directive', () => {
  it('is defined', () => {
    expect(PERCENTAGEValidator).toBeDefined();
  });
});
