import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import classes from './App.scss';
import StartScreen from '../../components/StartScreen/StartScreen';
import Tabs from '../../components/Tabs/Tabs';


@inject('MobxStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStartScreen: true,
    };
  }


    goToNextScreen = () => {
      const { showStartScreen } = this.state;
      const { MobxStore: { tabTitle } } = this.props;

      if (tabTitle.length < 1) {
        return;
      }

      this.setState(
        { showStartScreen: !showStartScreen },
      );
    };

    clearStoreHandler = () => {
      const { MobxStore: { clearStoreHandler } } = this.props;

      clearStoreHandler();
      this.setState({ showStartScreen: true });
    };

    changeTabTitle = (value) => {
      const { MobxStore: { changeTitle } } = this.props;

      changeTitle(value);
    };

    render() {
      const { showStartScreen } = this.state;
      const { MobxStore: { getTitle } } = this.props;

      const startScreen = (
        <StartScreen
          data={getTitle}
          btnClicked={this.goToNextScreen}
          changed={(event) => {
            this.changeTabTitle(event.target.value);
          }}
        />
      );
      const tabs = (
        <Tabs
          clearStore={this.clearStoreHandler}
          title={getTitle}
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
  MobxStore: PropTypes.func.isRequired,
};

export default App;
