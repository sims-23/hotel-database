import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Aggregations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unavalRooms: [],
      minPrice: [],
    };
  }

  getUnavalRoomsCount() {
    var _this = this;
    $.ajax({
      method: 'GET',
      url: '/unavalcount'
    }).done(function(data) {
      _this.setState({
        unavalRooms: data
      });
    })
  }

  getMinPrice() {
    var _this = this;
    $.ajax({
      method: 'GET',
      url: '/minprice'
    }).done(function(data) {
      _this.setState({
        minPrice: data
      });
    })
  }


  render () {
      return (<div>
        <h3>Number of unavailable rooms grouped by type (Aggregation query 1):</h3>
        <p> <button onClick={() => this.getUnavalRoomsCount()}> Get count</button></p>

          <table>
            <thead>
              <tr>
            <th>Type</th>
            <th>Count</th>
            </tr>
            </thead>
           <tbody>
             {this.state.unavalRooms.map(function(item, key) {
                    return (
                       <tr key = {key}>
                         <td>{item.type}</td>
                         <td>{item['count(*)']}</td>
                       </tr>
                     )

                  })}
                </tbody>
            </table>

        <h3>Minimum price/hour for a facility (Aggregation query 2):</h3>
        <p> <button onClick={() => this.getMinPrice()}> Get min price</button></p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
            <th>Min price per hour</th>
            </tr>
            </thead>
           <tbody>
             {this.state.minPrice.map(function(item, key) {
                    return (
                       <tr key = {key}>
                         <td>{item.type}</td>
                         <td>{item['min(price_per_hour)']}</td>
                       </tr>
                     )
                  })}
                </tbody>
            </table>
      </div>);

  }
}


ReactDOM.render(
  <Aggregations />,
  document.getElementById('app')
);

export default Aggregations;
