import { FormControl } from '@angular/forms';
import { number } from './validator';
import { NUMBERPipe } from './pipe';
import { NUMBERValidator } from './directive';

describe('Number Validator', () => {
  it('returns null for empty control', () => {
    expect(number(new FormControl(''))).toBeNull();
  });

  it('returns null for valid number', () => {
    expect(number(new FormControl('1.234,56'))).toBeNull();
  });
});

describe('Number Pipe', () => {
  it('formats raw number correctly', () => {
    expect(new NUMBERPipe().transform('1234,56', undefined)).toEqual('1.234,56');
  });
});

describe('Number Directive', () => {
  it('is defined', () => {
    expect(NUMBERValidator).toBeDefined();
  });
});
