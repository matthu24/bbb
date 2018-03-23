import {fetchBenches} from '../util/bench';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => dispatch => (
  fetchBenches().then(benches => dispatch(receiveBenches(benches)));
}
