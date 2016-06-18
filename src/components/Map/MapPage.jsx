var React = require('react');
var Link = require('react-router').Link;
//require other components
var MapImg = require('./Map.jsx');
//require imgs
var randomizeImg = require('../../assets/random.svg');
var randomizeImgSelected = require('../../assets/random-selected.svg');


class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = props.params.category;
    this.questionId = Math.random().toString().slice(7);
    this.randomizeImg = randomizeImg;
  }
  onMapClick() {
    this.setState(
      function(previousState) {
        if (!previousState.isSelected) {
          return {isSelected: true}
        } else {
          return {isSelected: false}
        }
      }, this.toggleColour.bind(this)
    )
  }
  toggleColour() {
    if (this.state.isSelected) {
      this.randomizeImg = randomizeImgSelected;
    } else {
      this.randomizeImg = randomizeImg;
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='f-panel f-panel-big'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>Pick an area</h3>
                <Link to="/">
                  <h3 className='f-quit'>Quit</h3>
                </Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <MapImg />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <img className="f-map-random" src={this.randomizeImg} onClick={this.onMapClick.bind(this)} />
                <div className='f-btn-disabled f-map-next'>
                  <Link to={`question/${this.category}/anArea/${this.questionId}`}>
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

module.exports = MapPage
