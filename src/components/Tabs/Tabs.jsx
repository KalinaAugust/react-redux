import React from 'react';
import PropTypes from 'prop-types';
import classes from './Tabs.scss';
import TabWrapper from '../../containers/TabWrapper/TabWrapper';


const Tabs = (props) => {
  const { clearStore, title } = props;

  return (
    <div className={classes.Tabs}>
      <span
        role="presentation"
        className={classes.Closer}
        onClick={clearStore}
      >
        X
      </span>
      <h4 className={classes.Title}>{ title }</h4>
      <TabWrapper />
    </div>
  );
};

Tabs.propTypes = {
  clearStore: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tabs;
