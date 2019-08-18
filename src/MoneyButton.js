import React, { PureComponent } from 'react';
import './App.scss';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class MoneyButton extends PureComponent {
  state = {
    value: 0,
    maxValue: 10,
    inputValue: '',
  };

  stateRenderMap = {
    loading: props => {
      const { loadingMessage } = props;

      return <div className="loading-title">{loadingMessage}</div>;
    },
    success: props => {
      const currencyName = 'HK$';
      const { successMessagePrefix } = props;
      const successTitle = `${successMessagePrefix} ${currencyName} `;
      const successValue = this.state.inputValue;

      return (
        <>
          <div className="success-title">{successTitle}</div>
          <div className="success-title-value">{successValue}</div>
        </>
      );
    },
    error: props => {
      const { errorMessage } = props;

      return <div className="error-title">{errorMessage}</div>;
    },
    default: props => {
      const currencyName = 'HK$';

      return (
        <>
          <div className="value-input-currency">{currencyName}</div>
          <input
            type="numebr"
            className="value-input"
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
        </>
      );
    },
  };

  onSliderChange = (value) => {
    this.setState({ value })
  }

  getTheme (props) {
    const { loading, success, error } = props;

    if (loading) {
      return 'loading-theme';
    }

    if (success) {
      return 'success-theme';
    }

    if (error) {
      return 'error-theme';
    }

    if (this.state.value >= 9.5) {
      return 'completed-theme';
    }

    if (!this.state.inputValue) {
      return 'empty-theme'
    }

    return '';
  }

  getRenderContentMethod({ loading, success, error }) {
    if (loading) {
      return this.stateRenderMap['loading'];
    }

    if (success) {
      return this.stateRenderMap['success'];
    }

    if (error) {
      return this.stateRenderMap['error'];
    }

    return this.stateRenderMap['default'];
  }

  paidProccess = value => {
    if (this.state.value >= 9.5) {
      setTimeout(() => this.setState({ value: 0 }), 10);
      return;
    }
    setTimeout(() => this.setState({ value: 0 }), 10);
  };

  renderSliderContent(props) {
    const renderContent = this.getRenderContentMethod(props);

    return <div className="value-input-container">{renderContent(props)}</div>;
  }

  renderSlider(props) {
    const { loading, success, error } = props
    const isDisabled = loading || success || error;
    const theme = this.getTheme(props);

    return (
      <div className={`slider-wrapper ${theme}`}>
        <InputRange
          maxValue={this.state.maxValue}
          minValue={0}
          formatLabel={() => ''}
          value={this.state.value}
          onChange={this.onSliderChange}
          onChangeComplete={this.paidProccess}
          draggableTrack={true}
          step={0.1}
          disabled={isDisabled}
        />
      </div>
    );
  }

  render() {
    const myProps = {
      loading: false,
      loadingMessage: 'Processing',
      success: false,
      successMessagePrefix: 'Paid',
      error: false,
      errorMessage: 'Try again',
      onSlideComplete: console.log,
      onChange: console.log,
      currency: '',
    };
    const theme = this.getTheme(myProps);

    return (
      <div className={`money-button ${theme}`}>
        {this.renderSliderContent(myProps)}
        {this.renderSlider(myProps)}
      </div>
    );
  }
}

export default MoneyButton;
