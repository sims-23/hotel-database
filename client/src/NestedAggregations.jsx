import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class NestedAggregations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minMax: 'Min',
      averagePrice: null
    };
  }

  onMinMaxChange (e) {
    this.setState({
      minMax: e.target.value
    });
  }

  getAveragePriceByType(minMax) {
    var _this = this;
    $.ajax({
      method: 'POST',
      url: '/averagepricebytype',
      data: { minMax }
    }).done(function(data) {
      _this.setState({
        averagePrice: data[0][_this.state.minMax + '(Temp.average)']
      });
    })
  }

  getAveragePriceByOccupancy(minMax) {
    var _this = this;
    $.ajax({
      method: 'POST',
      url: '/averagepricebyoccupancy',
      data: { minMax }
    }).done(function(data) {
      _this.setState({
        averagePrice: data[0][_this.state.minMax + '(Temp.average)']
      });
    })
  }


  render () {
      return (<div>
        <h3>2 Nested aggregation queries:</h3>
        <form>Choose minimum or maximum:
        <select value={this.state.minMax} onChange={this.onMinMaxChange.bind(this)}>
          <option value="Min">Min</option>
          <option value="Max">Max</option>
        </select>
      </form>
      <button onClick={() => this.getAveragePriceByType(this.state.minMax)}>Get overnight room average price by type</button>
      <button onClick={() => this.getAveragePriceByOccupancy(this.state.minMax)}>Get facility average price by occupancy</button>
      <p>{this.state.averagePrice}</p>
      </div>);

  }
}


ReactDOM.render(
  <NestedAggregations />,
  document.getElementById('app')
);

export default NestedAggregations;
