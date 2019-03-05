import React from 'react';
import PropTypes from 'prop-types';
import classes from './TabItem.scss';


const TabItem = (props) => {
  const { title, children } = props;

  return (
    <div className={classes.TabItem}>
      <div className={classes.Title}>
        {title}
      </div>
      {children}
    </div>
  );
};

TabItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default TabItem;
