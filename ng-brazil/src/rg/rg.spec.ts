import { FormControl } from '@angular/forms';
import { rg } from './validator';
import { RGPipe } from './pipe';
import { RGValidator } from './directive';

describe('RG Validator', () => {
  it('returns null for empty control', () => {
    expect(rg(new FormControl(''))).toBeNull();
  });

  it('returns null for valid RG', () => {
    expect(rg(new FormControl('mg-10.123.456'))).toBeNull();
  });

  it('returns error for invalid RG', () => {
    expect(rg(new FormControl('123456789'))).toEqual({ rg: true });
  });
});

describe('RG Pipe', () => {
  it('formats raw RG correctly', () => {
    expect(new RGPipe().transform('MG10123456')).toEqual('MG-10.123.456');
  });
});

describe('RG Directive', () => {
  it('is defined', () => {
    expect(RGValidator).toBeDefined();
  });
});
