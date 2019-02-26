import React, {Component} from 'react';

import classes from "./ImgBlock.css";


class ImgBlock extends Component {

    componentDidMount() {
        if (this.props.data.imgDirectUrl === '') {
            this.props.getCatPic();
        }
    }

    render() {

        return (
            <div>
                <div className={classes.Title}>AJAX REQUEST</div>
                <img
                    className={classes.Img}
                    src={this.props.data.imgDirectUrl}
                    alt={this.props.data.imgName}
                />
                <div className={classes.ImgName}>{this.props.data.imgName}</div>
            </div>
        );
    }
}

export default ImgBlock;