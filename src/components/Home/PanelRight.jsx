const React = require('react');
const Link = require('react-router').Link;
//require badge img
const Badge = require('../Badge.jsx');


class PanelRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressPercent: window.FrenchlyProgress
    };
  }
  handleResetClick() {
    this.setState({ progressPercent: 0 });
  }
  render() {
    return (
      <div className='f-panel f-panel-right row'>
        <div className='col-md-12'>
          <h4 className='f-progress'>Progress</h4>
          <Badge progressPercent={this.state.progressPercent} />
          <div className='f-btn-primary f-reset' onClick={this.handleResetClick.bind(this)}>
            <h4>Reset</h4>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PanelRight;
