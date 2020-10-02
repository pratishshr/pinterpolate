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
    expect(pinterpolate(str, undefined)).equal(str);
  });

  it('should not interpolate keys with same initial key name', () => {
    const str = 'Test';

    expect(
      pinterpolate(':one :onextwo', {
        one: '1',
        onextwo: '2'
      })
    ).equal('1 2');
  });

  it('should not interpolate keys with same initial key name', () => {
    const str = 'This is test to check if :library passes this test.';

    expect(
      pinterpolate(str, {
        library: 'pinterpolate'
      })
    ).equal('This is test to check if pinterpolate passes this test.');
  });

  it('should add queries to link for search', () => {
    const str = 'https://github.com/search';
    const params = {}; // can be empty string, null or undefined
    const queries = {
      l: 'JavaScript',
      q: 'label:"help+wanted"',
      type: 'Issues'
    };

    expect(pinterpolate(str, params, queries)).equal(
      'https://github.com/search?l=JavaScript&q=label:"help+wanted"&type=Issues'
    );
  });

  it('should add the queries for name and address to link', () => {
    const str = '/:userId/:companyId';
    const params = {
      userId: '456',
      companyId: '123'
    };
    const queries = {
      name: 'John',
      address: 'KTM'
    };

    expect(pinterpolate(str, params, queries)).equal(
      '/456/123?name=John&address=KTM'
    );
  });
});
