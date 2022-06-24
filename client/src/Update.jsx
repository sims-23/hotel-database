import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomType: 'Single',
      rate: '',
      rooms: []
    };
  }

  updateRate(roomType, newRate) {
    var _this = this;
    if (parseInt(newRate) < 50) { // check for the Update Operation
      window.alert('The new rate is too low! Has to be greater or equal to 50.');
    } else {
      $.ajax({
        method: 'POST',
        url: '/update',
        data: { roomType, newRate }
      }).done(function(data) {
        _this.setState({
          rooms: data
        });
      })
    }
  }

  onRoomTypeChange (e) {
    this.setState({
      roomType: e.target.value
    });
  }

  onRateChange (e) {
    this.setState({
      rate: e.target.value
    });
  }


  render () {
      return (<div>
        <h3>Update the rate for a given room type (Update)</h3>
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
      <p>Enter new rate: <input value={this.state.rate} onChange={this.onRateChange.bind(this)}/></p>
        <p> <button onClick={() => this.updateRate(this.state.roomType, this.state.rate)}> Update </button></p>

          <table>
          <thead>
            <tr>
          <th>Room num.</th>
          <th>Type</th>
          <th>Price per night</th>
          <th>Res. ID</th>
          </tr>
          </thead>
           <tbody>{this.state.rooms.map(function(item, key) {
                    return (
                       <tr key = {key}>
                         <td>{item.room_num}</td>
                         <td>{item.type}</td>
                          <td>{item.price_per_night}</td>
                          <td>{item.rid}</td>
                       </tr>
                     )

                  })}</tbody>
            </table>
      </div>);

  }
}


ReactDOM.render(
  <Update />,
  document.getElementById('app')
);

export default Update;
