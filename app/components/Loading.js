import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '36px'
  }
};


class Loading extends React.Component {
  constructor(props) {
    super(props);
    const { text } = props;

    this.state = { text };
  }

  componentDidMount () {
    const {text, speed} = this.props;

    const stopper = text + '...';

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text }))
        : this.setState(({text}) => ({text: text + '.'}));
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}
Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};
Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

export default Loading;
