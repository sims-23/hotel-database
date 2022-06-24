import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class SelectionProjection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomType: 'Single',
      avalRooms: [],
      desiredPrice: ''
    };
  }

  onRoomTypeChange (e) {
    this.setState({
      roomType: e.target.value
    });
  }

  onPriceChange (e) {
    this.setState({
      desiredPrice: e.target.value
    });
  }

  checkRooms(roomType) {
    var _this = this;
    if (roomType !== undefined) {
      $.ajax({
        method: 'POST',
        url: '/rooms',
        data: { roomType: roomType }
      }).done(function(data) {
        _this.setState({
          avalRooms: data
        });
      })
    }
  }

  checkRooms2(price) {
    var _this = this;
    var priceAsNum = Number(price);
    if (Number.isNaN(priceAsNum) || price < 0) {
      window.alert('Invalid price input!')
    } else if (price !== '') {
      $.ajax({
        method: 'POST',
        url: '/roomsminprice',
        data: { price: price }
      }).done(function(data) {
        _this.setState({
          avalRooms: data
        });
      })
    }
  }

  render () {
      return (<div>
        <h3>See available rooms for tonight (2 Selection-Projection queries):</h3>
                <form>Room type:
                <select value={this.state.roomType} onChange={this.onRoomTypeChange.bind(this)}>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Queen">Queen</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="King Size">King Size</option>
                  <option value="VIP">VIP</option>
                  <option value="President">President</option>

                </select>
              </form>
            <p><button onClick={() => this.checkRooms(this.state.roomType)}>Get information of available rooms given OvernightRoom type</button></p>

          <p>Less than: <input value={this.state.desiredPrice} onChange={this.onPriceChange.bind(this)}/></p>
              <p><button onClick={() => this.checkRooms2(this.state.desiredPrice)}>Get information of available rooms less than specified price</button></p>

              <table>
              <thead>
                <tr>
              <th>Type</th>
              <th>Price per night</th>
              <th>Room number</th>
              </tr>
              </thead>
               <tbody>{this.state.avalRooms.map(function(item, key) {
                        return (
                           <tr key = {key}>
                             <td>{item.type}</td>
                             <td>{item.price_per_night}</td>
                              <td>{item.room_num}</td>
                           </tr>
                         )

                      })}</tbody>
                </table>
      </div>);
  }
}

ReactDOM.render(
  <SelectionProjection />,
  document.getElementById('app')
);

export default SelectionProjection;
