import {fetchAllBenches} from '../util/bench';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => dispatch => (
  fetchAllBenches().then(benches => dispatch(receiveBenches(benches)))
)
