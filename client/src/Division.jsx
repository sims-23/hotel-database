import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Division extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  getStaff() {
    var _this = this;
    $.ajax({
      method: 'GET',
      url: '/staff'
    }).done(function(data) {
      _this.setState({
        names: data
      });
    })
  }

  render () {
      return (<div>
        <h3>Find all staff who oversees all overnight rooms (Division query):</h3>
        <p> <button onClick={() => this.getStaff()}> Get staff</button></p>

          <table>
          <thead>
            <tr>
          <th>Name</th>
          </tr>
          </thead>
           <tbody>{this.state.names.map(function(item, key) {
                    return (
                       <tr key = {key}>
                         <td>{item.name}</td>
                       </tr>
                     )

                  })}</tbody>
            </table>
      </div>);

  }
}


ReactDOM.render(
  <Division />,
  document.getElementById('app')
);

export default Division;
