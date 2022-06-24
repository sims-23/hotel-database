import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class StaffReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      staffReport: [],
    };
  }

  onFromChange (e) {
    this.setState({
      from: e.target.value
    });
  }

  onToChange (e) {
    this.setState({
      to: e.target.value
    });
  }

  getStaffReport(fromDate, toDate) {
    var _this = this;
    if (new Date(fromDate) > new Date(toDate)) {
      window.alert('From date has to be after to date!')
    } else {
      $.ajax({
        method: 'POST',
        url: '/staffreport',
        data: { fromDate, toDate }
      }).done(function(data) {
        _this.setState({
          staffReport: data
        });
      })
    }
  }


  render () {
      return (<div>
        <h3>Staff Report (Join query):</h3>
          <form>
          From:
          <input type="date" value={this.state.from} onChange={this.onFromChange.bind(this)}/>
          To:
          <input type="date" value={this.state.to} onChange={this.onToChange.bind(this)}/>
          </form>
          <p> <button onClick={() => this.getStaffReport(this.state.from, this.state.to)}> Get report </button></p>
            <table>
              <thead>
                <tr>
              <th>Name</th>
              <th>Reservation ID</th>
              <th>Room number</th>
              <th>Username</th>
              <th>Card num.</th>
              <th>Card comp.</th>
              </tr>
              </thead>
             <tbody>
               {this.state.staffReport.map(function(item, key) {
                      return (
                         <tr key = {key}>
                           <td>{item.name}</td>
                           <td>{item.rid}</td>
                           <td>{item.room_num}</td>
                           <td>{item.username}</td>
                           <td>{item.num}</td>
                           <td>{item.company}</td>
                         </tr>
                       )

                    })}
                  </tbody>
              </table>
      </div>);

  }
}


ReactDOM.render(
  <StaffReport />,
  document.getElementById('app')
);

export default StaffReport;
