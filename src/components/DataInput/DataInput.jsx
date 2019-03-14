import React from 'react';
import PropTypes from 'prop-types';
import classes from './DataInput.scss';


const DataInput = (props) => {
  const {
    data, id, label, changed, placeholder, btnText, btnClicked,
  } = props;
  const disabled = data.length ? '' : classes.disabled;
  const btnClass = `${classes.Show_button} ${disabled}`;

  return (
    <div className={classes.DataInput}>
      <label className={classes.Label} htmlFor={id}>
        {label}
        <input
          className={classes.Input}
          id={id}
          type="text"
          onChange={changed}
          value={data}
          placeholder={placeholder}
        />
      </label>

      <button
        type="button"
        className={btnClass}
        onClick={btnClicked}
      >
        {btnText}
      </button>
    </div>
  );
};

DataInput.propTypes = {
  data: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  btnClicked: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default DataInput;
