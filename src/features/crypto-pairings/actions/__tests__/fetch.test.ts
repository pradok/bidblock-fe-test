import {fetchCryptoPairings, fetchSuccess, fetchError} from '../fetch';
import {pairings} from '../../fixtures';

const error: Error = {
  message: 'Error fetching collection',
  name: 'Error Name',
};

describe('features -> product -> actions', () => {
  it('fetchProducts', () => {
    expect(fetchCryptoPairings()).toMatchSnapshot();
  });
  it('fetchProducts', () => {
    expect(fetchSuccess(pairings)).toMatchSnapshot();
  });
  it('fetchProducts', () => {
    expect(fetchError(error)).toMatchSnapshot();
  });
});
