import { FormControl } from '@angular/forms';
import { time } from './validator';
import { TIMEPipe } from './pipe';
import { TIMEValidator } from './directive';

describe('Time Validator', () => {
  it('returns null for empty control', () => {
    expect(time(new FormControl(''))).toBeNull();
  });

  it('returns null for valid time', () => {
    expect(time(new FormControl('06:33'))).toBeNull();
  });

  it('returns error for invalid time', () => {
    expect(time(new FormControl('2599'))).toEqual({ time: true });
  });
});

describe('Time Pipe', () => {
  it('formats raw time correctly', () => {
    expect(new TIMEPipe().transform('0633')).toEqual('06:33');
  });
});

describe('Time Directive', () => {
  it('is defined', () => {
    expect(TIMEValidator).toBeDefined();
  });
});
