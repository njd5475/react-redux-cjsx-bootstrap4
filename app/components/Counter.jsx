import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BaseCounter = ({ count, onPlusClick, onMinusClick }) => (
  <div className="row">
    <div className="col-md-12">
      <h2>Redux Counter:</h2>
      <p>
        <button className="btn btn-primary" onClick={onMinusClick}>-</button>
        {count}
        <button className="btn btn-secondary" onClick={onPlusClick}>+</button>
      </p>
    </div>
  </div>
);

BaseCounter.propTypes = {
  count: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { count: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlusClick: () => dispatch({ type: 'INCREMENT' }),
    onMinusClick: () => dispatch({ type: 'DECREMENT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseCounter)
