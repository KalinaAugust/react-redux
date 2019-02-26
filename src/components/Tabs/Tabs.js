import React, {Component} from 'react';

import classes from './Tabs.css';
import TabWrapper from '../../containers/TabWrapper/TabWrapper';

class Tabs extends Component {



    render() {
        return (
            <div className={classes.Tabs}>
                <span className={classes.Closer}>X</span>
                <h4 className={classes.Title}>{this.props.title}</h4>
                <TabWrapper/>
            </div>
        );
    }
}


export default Tabs;