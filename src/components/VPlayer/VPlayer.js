import React, {Component} from 'react';

import classes from "./VPlayer.css";


// http://techslides.com/demos/sample-videos/small.mp4
// http://clips.vorwaerts-gmbh.de/VfE_html5.mp4 default


class VPlayer extends Component {
    render() {
        return (
            <video
                controls
                className={classes.VPlayer}
                autoPlay={true}
                loop={true}
                muted={true}
                data-reactid=".0.1.0.0">
                <source type="video/mp4"
                        data-reactid=".0.1.0.0.0"
                        src={this.props.videoUrl}
                />
            </video>
        );
    }
}

export default VPlayer;