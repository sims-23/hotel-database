import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rid: '',
      reservations: []
    };
  }

  cancelReservation(ridToCancel) {
    var _this = this;
    $.ajax({
      method: 'POST',
      url: '/cancelres',
      data: { rid: ridToCancel }
    }).done(function(data) {
      _this.setState({
        reservations: data
      });
    })
  }

  onRIDChange (e) {
    this.setState({
      rid: e.target.value
    });
  }

  render () {
      return (<div>
        <h3>Delete</h3>
        <p>Enter reservation ID to cancel: <input value={this.state.rid} onChange={this.onRIDChange.bind(this)}/></p>
        <p> <button onClick={() => this.cancelReservation(this.state.rid)}> Cancel </button></p>

          <table>
          <thead>
            <tr>
          <th>Reservation ID</th>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Card num.</th>
          <th>Comp.</th>
          <th>User ID</th>
          </tr>
          </thead>
           <tbody>{this.state.reservations.map(function(item, key) {
                    return (
                       <tr key = {key}>
                         <td>{item.rid}</td>
                         <td>{item.date}</td>
                          <td>{item.from_date}</td>
                          <td>{item.to_date}</td>
                          <td>{item.card_num}</td>
                          <td>{item.company}</td>
                          <td>{item.user_id}</td>
                       </tr>
                     )

                  })}</tbody>
            </table>
      </div>);
  }
}


ReactDOM.render(
  <Delete />,
  document.getElementById('app')
);

export default Delete;
