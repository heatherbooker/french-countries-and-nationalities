var React = require('react');
const Link = require('react-router').Link;
//other components
var ProgressBar = require('./ProgressBar.jsx');
var Badge = require('../Badge.jsx');


class LvlCompletePage extends React.Component {
  constructor(props) {
    super(props);
    const FrenchlyProgress = JSON.parse(localStorage.getItem('FrenchlyProgress'));
    if (FrenchlyProgress[props.params.category][props.params.continentCode] === false) {
      this.state = { progress: FrenchlyProgress[props.params.category].score + 12 };
      FrenchlyProgress[props.params.category].score = FrenchlyProgress[props.params.category].score + 12;
      FrenchlyProgress[this.props.params.category][this.props.params.continentCode] = true;
      localStorage.setItem('FrenchlyProgress', JSON.stringify(FrenchlyProgress));
    } else {
      this.state = { progress: FrenchlyProgress.score };
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="f-panel f-panel-big">
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>Countries - Africa</h3>
              </div>
            </div>
            <div className='row'>
              <ProgressBar progress={100} />
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2 className="f-instruct-text">Lesson Complete!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <span className="f-fluency-text">You are now {this.state.progress}% fluent in {this.props.params.category} in French!</span>
              </div>
              <div className="col-md-4">
                <Badge progressPercent={this.state.progress} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-md-offset-8">
                <div className="f-continue-btn f-btn-proceed">
                  <Link to="/" >
                    <span>Continue</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LvlCompletePage.propTypes = {
  params: React.PropTypes.object
}

module.exports = LvlCompletePage;
