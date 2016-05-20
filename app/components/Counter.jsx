import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BaseCounter = ({ count, onPlusClick, onMinusClick }) => (
  <div className="row">
    <div className="col-md-12">
      <h2>Redux Counter:</h2>
      <p>
        <button onClick={onMinusClick}>-</button>
        {count}
        <button onClick={onPlusClick}>+</button>
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
