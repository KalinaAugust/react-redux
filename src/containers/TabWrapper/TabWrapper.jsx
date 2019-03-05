import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classes from './TabWrapper.scss';
import TabItem from '../../components/TabItem/TabItem';
import TabComponent from '../../components/TabComponent/TabComponent';
import { changeVideoUrl } from '../../store/tabWrapper/actions';


class TabWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temporalVideoUrl: '',
      currentTabIndex: 0,
      tabSwitchers: [
        { title: 'TAB-1', id: 0 },
        { title: 'TAB-2', id: 1 },
        { title: 'TAB-3', id: 2 },
      ],
      imgBlockData: {
        imgRequestUrl: 'https://aws.random.cat/meow',
        imgDirectUrl: '',
        imgName: '',
      },
    };
  }


    renderTabSwitchers = (itemsArray) => {
      const currentStyles = [classes.Switcher, classes.current];
      const { currentTabIndex } = this.state;

      return itemsArray.map(item => (
        <div
          role="presentation"
          key={item.id}
          className={
            item.id === currentTabIndex
              ? currentStyles.join(' ')
              : classes.Switcher
          }
          onClick={() => this.switcherClickHandler(item.id)}
        >
          {item.title}
        </div>
      ));
    };

    switcherClickHandler = (id) => {
      this.setState(
        { currentTabIndex: id },
      );
    };

    getImgName = (directUrl) => {
      const { imgBlockData } = this.state;
      const indexAfterLastSlash = directUrl.lastIndexOf('/') + 1;

      imgBlockData.imgName = directUrl.slice(indexAfterLastSlash);

      this.setState({ imgBlockData });
    };

    getCatPic = async () => {
      const { imgBlockData } = this.state;
      const response = await fetch(imgBlockData.imgRequestUrl);
      const json = await response.json();
      const imgDirectUrl = json.file;

      this.setState({ imgBlockData: { imgDirectUrl } });
      this.getImgName(imgDirectUrl);
    };

    setTemporalVideoUrl = (event) => {
      const newTemporalVideoUrl = event.target.value;

      this.setState(
        { temporalVideoUrl: newTemporalVideoUrl },
      );
    };

    saveVideoUrlToStore = () => {
      const { temporalVideoUrl } = this.state;
      const { changeVideoUrlHandler } = this.props;

      if (temporalVideoUrl.length < 1) {
        return;
      }

      changeVideoUrlHandler(temporalVideoUrl);
    };


    render() {
      const {
        tabSwitchers, temporalVideoUrl, imgBlockData, currentTabIndex,
      } = this.state;
      const currentTabTitle = tabSwitchers[currentTabIndex].title;
      const { videoUrl } = this.props;


      return (
        <div className={classes.TabWrapper}>
          <div className={classes.tabSwitchers}>
            {this.renderTabSwitchers(tabSwitchers)}
          </div>
          currentTabIndex
          <div className={classes.TabItemsBlock}>
            <TabItem title={currentTabTitle}>
              <TabComponent
                currentTabIndex={currentTabIndex}
                temporalVideoUrl={temporalVideoUrl}
                imgBlockData={imgBlockData}
                videoUrl={videoUrl}
                setTemporalVideoUrl={this.setTemporalVideoUrl}
                saveVideoUrlToStore={this.saveVideoUrlToStore}
                getCatPic={this.getCatPic}
              />
            </TabItem>
          </div>
        </div>
      );
    }
}

TabWrapper.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  changeVideoUrlHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  videoUrl: state.tabWrapper.videoUrl,
});

const mapDispatchToProps = dispatch => ({
  changeVideoUrlHandler: bindActionCreators(changeVideoUrl, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(TabWrapper);
