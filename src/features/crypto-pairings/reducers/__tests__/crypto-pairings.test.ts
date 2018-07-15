import {cryptoPairings, initialState} from '../../reducers';
import {actionTypes as at} from '../../actions';
import {pairings} from '../../fixtures';

describe('cryptoPairings reducers', () => {
  it(`Action ${at.CRYPTO_PAIRINGS_FETCH} should return state`, () => {
    expect(
      cryptoPairings(initialState, {type: at.CRYPTO_PAIRINGS_FETCH})
    ).toMatchSnapshot()
  });
  it(`Action ${at.CRYPTO_PAIRINGS_FETCH_SUCCESS} should return state`, () => {
    expect(
      cryptoPairings(initialState, {type: at.CRYPTO_PAIRINGS_FETCH_SUCCESS, payload: pairings})
    ).toMatchSnapshot()
  });
  it(`Action ${at.CRYPTO_PAIRINGS_FETCH_ERROR} should return state`, () => {
    expect(
      cryptoPairings(initialState, {type: at.CRYPTO_PAIRINGS_FETCH_ERROR})
    ).toMatchSnapshot()
  });
});