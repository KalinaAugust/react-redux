import React from 'react';
import PropTypes from 'prop-types';
import classes from './VPlayer.scss';


const VPlayer = (props) => {
  const { videoUrl } = props;

  return (
    <video
      controls
      className={classes.VPlayer}
      autoPlay
      loop
      muted
      data-reactid=".0.1.0.0"
    >
      <source
        type="video/mp4"
        data-reactid=".0.1.0.0.0"
        src={videoUrl}
      />
    </video>
  );
};

VPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VPlayer;
