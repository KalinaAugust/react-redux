import React, {Component} from 'react';
import classes from "./TabWrapper.css";
import TabItem from '../../components/TabItem/TabItem';
import DataInput from '../../components/DataInput/DataInput';
import VPlayer from '../../components/VPlayer/VPlayer';
import ImgBlock from '../../components/ImgBlock/ImgBlock';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import { changeVideoUrl } from '../../store/tabWrapper/actions';




class TabWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temporalVideoUrl: '',
            currentTabIndex: 0,
            tabSwitchers: [
                {title: 'TAB-1', id: 0},
                {title: 'TAB-2', id: 1},
                {title: 'TAB-3', id: 2},
            ],
            imgBlockData: {
                imgRequestUrl: 'https://aws.random.cat/meow',
                imgDirectUrl: '',
                imgName: ''
            }
        };
    }

    renderTabSwitchers = (itemsArray) => {
        let currentStyles = [classes.Switcher, classes.current];

        return itemsArray.map((item, index) => (
            <div
                key={item.id}
                className={
                    item.id === this.state.currentTabIndex ?
                    currentStyles.join(' ') :
                    classes.Switcher
                }
                onClick={() => this.switcherClickHandler(item.id)}
            >
                {item.title}
            </div>
        ))
    };

    switcherClickHandler = (id) => {
        this.setState(
            {currentTabIndex: id}
        )
    };

    getImgName = (directUrl) => {
        const imgBlockData = {...this.state.imgBlockData};
        let indexAfterLastSlash = directUrl.lastIndexOf('/') + 1;
        let imgName = directUrl.slice(indexAfterLastSlash);

        imgBlockData.imgName = imgName;

        this.setState( {imgBlockData: imgBlockData} );
    };

    getCatPic = () => {
        const imgBlockData = {...this.state.imgBlockData};

        fetch(imgBlockData.imgRequestUrl)
            .then(response => response.json())
            .then(data => {
                imgBlockData.imgDirectUrl = data.file;
                this.setState( {imgBlockData: imgBlockData} );
                this.getImgName(data.file);
            });
    };

    setTemporalVideoUrl = (event) => {
        let { temporalVideoUrl } = this.state;
        temporalVideoUrl = event.target.value;

        this.setState(
            {temporalVideoUrl: temporalVideoUrl}
        )
    };

    saveVideoUrlToStore = () => {
        let { temporalVideoUrl } = this.state;

        if (temporalVideoUrl.length < 1) {
            return;
        }

        this.props.changeVideoUrl(temporalVideoUrl);
    };


    render() {
        const { tabSwitchers, temporalVideoUrl, imgBlockData } = this.state;
        const currentTabTitle = tabSwitchers[this.state.currentTabIndex].title;

        const { videoUrl } = this.props;


        const tabComponents = [
            <DataInput
                id="setUrl"
                placeholder="Enter URL here"
                data={temporalVideoUrl}
                changed={ (event) => this.setTemporalVideoUrl(event) }
                btnClicked={ this.saveVideoUrlToStore  }
                btnText="SAVE"
                label="SRC:"
            />,
            <VPlayer
                videoUrl={videoUrl}
            />,
            <ImgBlock
                data={imgBlockData}
                getCatPic={this.getCatPic}
            />
        ];

        return (
            <div className={classes.TabWrapper}>
                <div className={classes.tabSwitchers}>
                    {this.renderTabSwitchers(tabSwitchers)}
                </div>

                <div className={classes.TabItemsBlock}>
                    <TabItem title={currentTabTitle}>
                        {tabComponents[this.state.currentTabIndex]}
                    </TabItem>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        videoUrl: state.tabWrapper.videoUrl
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeVideoUrl: bindActionCreators(changeVideoUrl, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TabWrapper);
