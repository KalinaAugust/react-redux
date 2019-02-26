import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import classes from './App.css';
import StartScreen from '../../components/StartScreen/StartScreen';
import Tabs from '../../components/Tabs/Tabs';

import { changeTitle } from '../../store/actions';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showStartScreen: true
        };
    }




    goToNextScreen = () => {
        if ( this.props.defaultTitle.length < 1) {
            return;
        }

        this.setState(
            {showStartScreen: !this.state.showStartScreen}
        )
    };



    render() {
        const { defaultTitle, changeTitle } = this.props;

        let startScreen = null;
        let tabs = null;

        if (this.state.showStartScreen) {
            startScreen = (
                <StartScreen
                    data={defaultTitle}
                    btnClicked={this.goToNextScreen}
                    changed={(event) => {
                       changeTitle(event.target.value)
                    }}
                />
            )
        } else {
            tabs =(
                <Tabs title={defaultTitle}/>
            )
        }


        return (
            <div className={classes.App}>
                {startScreen}
                {tabs}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        defaultTitle: state.defaultTitle
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: bindActionCreators(changeTitle, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
