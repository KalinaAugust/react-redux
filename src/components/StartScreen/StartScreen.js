import React from 'react';

import DataInput from "../../components/DataInput/DataInput";
import classes from './StartScreen.css';

const StartScreen = (props) => (
    <div className={classes.StartScreen}>
        <DataInput
            id="StartScreen"
            placeholder="Enter title here"
            data={props.data}
            changed={ (event) => props.changed(event) }
            btnClicked={props.btnClicked}
            btnText="SHOW"
            label="TITLE:"
        />
    </div>
);



export default StartScreen;