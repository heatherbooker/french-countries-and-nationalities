const React = require('react');
const badgeImg = require("../assets/badge.svg");


class Badge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='f-progress-badge'>
        <img src={badgeImg} className='f-badge-icon'/>
        <h2 className='f-prog-percent'>{this.props.progressPercent}%</h2>
      </div>
    );
  }
}

module.exports = Badge;
