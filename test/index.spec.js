import { expect } from 'chai';

import pinterpolate from '../src';

describe('interpolate()', () => {
  it('should correctly interpolate the string with the supplied parameters', () => {
    const str = ':one :two :three';
    const params = {
      one: 1,
      two: 2,
      three: 3,
    };
    const expectedStr = '1 2 3';

    expect(pinterpolate(str, params)).equal(expectedStr);
  });

  it('should interpolate undefined params to blank strings', () => {
    const str = ':one :two :three';
    const params = {
      one: 1,
      two: 2,
      three: undefined,
    };
    const expectedStr = '1 2 ';

    expect(pinterpolate(str, params)).equal(expectedStr);
  });

  it('should return the string supplied if params is null or undefined', () => {
    const str = 'Test';

    expect(pinterpolate(str, null)).equal(str);
  });

  it('shoud not interpolate keys with same initial key name', () => {
    const str = 'Test';

    expect(
      pinterpolate(':one :onextwo', {
        one: '1',
        onextwo: '2',
      })
    ).equal('1 2');
  });

  const str = 'This is test to check if :library passes this test.';

  it('shoud not interpolate keys with same initial key name', () => {
    expect(
      pinterpolate(str, {
        library: 'pinterpolate',
      })
    ).equal('This is test to check if pinterpolate passes this test.');
  });
});
