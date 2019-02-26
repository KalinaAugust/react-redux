import React, {Component} from 'react';
import classes from "./TabWrapper.css";
import TabItem from '../../components/TabItem/TabItem';
import DataInput from '../../components/DataInput/DataInput';
import VPlayer from '../../components/VPlayer/VPlayer';
import ImgBlock from '../../components/ImgBlock/ImgBlock';


class TabWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoUrl: '',
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
        let { currentTabIndex } = this.state;
        currentTabIndex = id;

        this.setState(
            {currentTabIndex: currentTabIndex}
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

    setVideoUrl = (event) => {
        let { temporalVideoUrl } = this.state;
        temporalVideoUrl = event.target.value;

        this.setState(
            {temporalVideoUrl: temporalVideoUrl}
        )
    };


    saveVideoUrl = () => {
        this.setState(
            {videoUrl: this.state.temporalVideoUrl}
        )
    };


    render() {
        const { tabSwitchers } = this.state;
        const currentTabTitle = tabSwitchers[this.state.currentTabIndex].title;

        const tabComponents = [
            <DataInput
                id="setUrl"
                placeholder="Enter URL here"
                data={this.state.temporalVideoUrl}
                changed={ (event) => this.setVideoUrl(event) }
                btnClicked={this.saveVideoUrl}
                btnText="SAVE"
                label="SRC:"
            />,
            <VPlayer
                videoUrl={this.state.videoUrl}
            />,
            <ImgBlock
                data={this.state.imgBlockData}
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

export default TabWrapper;