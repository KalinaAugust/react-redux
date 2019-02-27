import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import classes from './App.css';
import StartScreen from '../../components/StartScreen/StartScreen';
import Tabs from '../../components/Tabs/Tabs';
import { changeTitle } from '../../store/app/actions';
import { clearStore } from '../../store/actions';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showStartScreen: true
        };
    }

    goToNextScreen = () => {
        if ( this.props.tabTitle.length < 1) {
            return;
        }

        this.setState(
            {showStartScreen: !this.state.showStartScreen}
        )
    };

    returnStorageToDefault = () => {
        this.props.clearStore();
        this.setState( {showStartScreen: true} )
    };

    render() {
        const { tabTitle, changeTitle } = this.props;

        let startScreen = null;
        let tabs = null;

        if (this.state.showStartScreen) {
            startScreen = (
                <StartScreen
                    data={tabTitle}
                    btnClicked={this.goToNextScreen}
                    changed={(event) => {
                       changeTitle(event.target.value)
                    }}
                />
            )
        } else {
            tabs =(
                <Tabs
                    clearStore={this.returnStorageToDefault}
                    title={tabTitle}
                />
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
        tabTitle: state.app.tabTitle
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: bindActionCreators(changeTitle, dispatch),
        clearStore: bindActionCreators(clearStore, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
