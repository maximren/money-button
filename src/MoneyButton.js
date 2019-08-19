import React, { PureComponent } from 'react';
import './App.scss';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class MoneyButton extends PureComponent {
  static defaultProps = {
    loading: false,
    loadingMessage: 'Processing',
    success: false,
    successMessagePrefix: 'Paid',
    error: false,
    errorMessage: 'Try again',
    onSlideComplete: () => {},
    onChange: () => {},
    currency: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      maxValue: 10,
      inputValue: '',
    };
  }


  stateRenderMap = {
    loading: () => {
      const { loadingMessage } = this.props;

      return <div className="loading-title">{loadingMessage}</div>;
    },
    success: () => {
      const currencyName = 'HK$';
      const { successMessagePrefix } = this.props;
      const successTitle = `${successMessagePrefix} ${currencyName} `;
      const successValue = this.state.inputValue;

      return (
        <>
          <div className="success-title">{successTitle}</div>
          <div className="success-title-value">{successValue}</div>
        </>
      );
    },
    error: () => {
      const { errorMessage } = this.props;

      return <div className="error-title">{errorMessage}</div>;
    },
    default: () => {
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

  getTheme () {
    const { loading, success, error } = this.props;

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

  getRenderContentMethod() {
    const { loading, success, error } = this.props;

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

  paidProccess = () => {
    if (this.state.value >= 9.5) {
      setTimeout(() => this.setState({ value: 0 }), 10);
      return;
    }
    setTimeout(() => this.setState({ value: 0 }), 10);
  };

  renderSliderContent() {
    const renderContent = this.getRenderContentMethod(this.props);

    return <div className="value-input-container">{renderContent()}</div>;
  }

  renderSlider() {
    const { loading, success, error } = this.props
    const isDisabled = loading || success || error;
    const theme = this.getTheme();

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
    const theme = this.getTheme();

    return (
      <div className={`money-button ${theme}`}>
        {this.renderSliderContent()}
        {this.renderSlider()}
      </div>
    );
  }
}

export default MoneyButton;
