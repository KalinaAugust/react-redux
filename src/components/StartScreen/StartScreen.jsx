import React from 'react';
import PropTypes from 'prop-types';
import DataInput from '../DataInput/DataInput';
import classes from './StartScreen.scss';

const StartScreen = (props) => {
  const { data, changed, btnClicked } = props;

  return (
    <div className={classes.StartScreen}>
      <DataInput
        id="StartScreen"
        placeholder="Enter title here"
        data={data}
        changed={event => changed(event)}
        btnClicked={btnClicked}
        btnText="SHOW"
        label="TITLE:"
      />
    </div>
  );
};

StartScreen.propTypes = {
  data: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  btnClicked: PropTypes.func.isRequired,
};

export default StartScreen;
