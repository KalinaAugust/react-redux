import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classes from './App.scss';
import StartScreen from '../../components/StartScreen/StartScreen';
import Tabs from '../../components/Tabs/Tabs';
import { changeTitle } from '../../store/app/actions';
import { clearStore } from '../../store/actions';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStartScreen: true,
    };
  }


    goToNextScreen = () => {
      const { tabTitle } = this.props;
      const { showStartScreen } = this.state;

      if (tabTitle.length < 1) {
        return;
      }

      this.setState(
        { showStartScreen: !showStartScreen },
      );
    };

    returnStorageToDefault = () => {
      const { clearStoreHandler } = this.props;

      clearStoreHandler();
      this.setState({ showStartScreen: true });
    };

    render() {
      const { showStartScreen } = this.state;
      const { changeTitleHandler, tabTitle } = this.props;
      const startScreen = (
        <StartScreen
          data={tabTitle}
          btnClicked={this.goToNextScreen}
          changed={(event) => {
            changeTitleHandler(event.target.value);
          }}
        />
      );
      const tabs = (
        <Tabs
          clearStore={this.returnStorageToDefault}
          title={tabTitle}
        />
      );


      return (
        <div className={classes.App}>
          {showStartScreen ? startScreen : tabs}
        </div>
      );
    }
}


App.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  clearStoreHandler: PropTypes.func.isRequired,
  changeTitleHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tabTitle: state.app.tabTitle,
});

const mapDispatchToProps = dispatch => ({
  changeTitleHandler: bindActionCreators(changeTitle, dispatch),
  clearStoreHandler: bindActionCreators(clearStore, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
