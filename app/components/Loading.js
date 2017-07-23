var React = require('react');
var PropTypes = require('prop-types');

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '36px'
  }
};


class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  componentDidMount () {
    var stopper = this.props.text + '...';
    this.interval = window.setInterval(() => {
      if(this.state.text === stopper) {
        this.setState(() => {
          return {
            text: this.props.text
          };
        });
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          };
        });
      }
    }, this.props.speed)
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

module.exports = Loading;
