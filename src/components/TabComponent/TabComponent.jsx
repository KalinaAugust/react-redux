import React from 'react';
import PropTypes from 'prop-types';
import ImgBlock from '../ImgBlock/ImgBlock';
import DataInput from '../DataInput/DataInput';
import VPlayer from '../VPlayer/VPlayer';


const TabComponent = (props) => {
  const {
    currentTabIndex, temporalVideoUrl,
    imgBlockData, videoUrl, getCatPic,
    setTemporalVideoUrl, saveVideoUrlToStore,
  } = props;

  const tabComponents = [
    <DataInput
      id="setUrl"
      placeholder="Enter URL here"
      data={temporalVideoUrl}
      changed={event => setTemporalVideoUrl(event)}
      btnClicked={saveVideoUrlToStore}
      btnText="SAVE"
      label="SRC:"
    />,
    <VPlayer
      videoUrl={videoUrl}
    />,
    <ImgBlock
      data={imgBlockData}
      getCatPic={getCatPic}
    />,
  ];


  return (
    <div>
      {tabComponents[currentTabIndex]}
    </div>
  );
};

TabComponent.propTypes = {
  currentTabIndex: PropTypes.number.isRequired,
  temporalVideoUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  imgBlockData: PropTypes.shape({
    imgRequestUrl: PropTypes.string,
    imgDirectUrl: PropTypes.string,
    imgName: PropTypes.string,
  }).isRequired,
  getCatPic: PropTypes.func.isRequired,
  setTemporalVideoUrl: PropTypes.func.isRequired,
  saveVideoUrlToStore: PropTypes.func.isRequired,
};

export default TabComponent;
