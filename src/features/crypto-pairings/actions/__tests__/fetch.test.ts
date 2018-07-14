import {fetchCryptoPairings, fetchSuccess, fetchError} from '../fetch';
import {pairings} from '../../fixtures';

const error: Error = {
  name: 'Error Name',
  message: 'Error fetching collection',
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
