import React from 'react';
import { connect } from 'react-redux';
// import BenchesIndex from '../benches/benches_index';
import Search from './search';
import {fetchBenches} from '../../actions/bench';

const mapStateToProps = state => ({
  benches: Object.values(state.entities.benches)
})

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
