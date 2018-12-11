import { expect } from 'chai';

import pinterpolate from '../src';

describe('interpolate()', () => {
  it('should correctly interpolate the string with the supplied parameters', () => {
    const str = ':one :two :three';
    const params = {
      one: 1,
      two: 2,
      three: 3
    };
    const expectedStr = '1 2 3';

    expect(pinterpolate(str, params)).equal(expectedStr);
  });

  it('should interpolate undefined params to blank strings', () => {
    const str = ':one :two :three';
    const params = {
      one: 1,
      two: 2,
      three: undefined
    };
    const expectedStr = '1 2 ';

    expect(pinterpolate(str, params)).equal(expectedStr);
  });

  it('should return the string supplied if params is null or undefined', () => {
    const str = 'Test';

    expect(pinterpolate(str, null)).equal(str);
  });
});
