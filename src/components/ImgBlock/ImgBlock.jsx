import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './ImgBlock.scss';


class ImgBlock extends Component {
  componentDidMount() {
    const { data: { imgDirectUrl }, getCatPic } = this.props;

    if (!imgDirectUrl) {
      getCatPic();
    }
  }

  render() {
    const { data: { imgDirectUrl, imgName } } = this.props;

    return (
      <div>
        <div className={classes.Title}>AJAX REQUEST</div>
        {imgDirectUrl ? (
          <img
            className={classes.Img}
            src={imgDirectUrl}
            alt={imgName}
          />
        ) : <h1 style={{ textAlign: 'center', padding: '70px' }}>loading...</h1>}
        <div className={classes.ImgName}>{imgName}</div>
      </div>
    );
  }
}

ImgBlock.propTypes = {
  data: PropTypes.shape({
    imgRequestUrl: PropTypes.string,
    imgDirectUrl: PropTypes.string,
    imgName: PropTypes.string,
  }).isRequired,
  getCatPic: PropTypes.func.isRequired,
};

export default ImgBlock;
