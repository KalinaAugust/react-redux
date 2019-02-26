import React from 'react';
import classes from "./TabItem.css";


const TabItem = (props) => {
    return (
        <div className={classes.TabItem}>
            <div className={classes.Title}>
                {props.title}
            </div>
            {props.children}
       </div>
    );
};

export default TabItem;