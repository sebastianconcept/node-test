import {expect} from 'chai';
import sum from '../../js/app/sum.js';

describe('js/app/sum.js', _ => {
  it('should add 1 + 1 to make two', () => {
    let result = sum(1,1);
    expect(result).to.equal(2);
  });
});