import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Division from './Division.jsx';
import Aggregations from './Aggregations.jsx';
import StaffReport from './StaffReport.jsx';
import NestedAggregations from './NestedAggregations.jsx';
import Delete from './Delete.jsx';
import Update from './Update.jsx';
import SelectionProjection from './SelectionProjection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (<div>
              <SelectionProjection/>
              <hr></hr>
              <StaffReport/>
              <hr></hr>
              <Division/>
              <hr></hr>
              <Aggregations/>
              <hr></hr>
              <NestedAggregations/>
              <hr></hr>
              <Delete/>
              <hr></hr>
              <Update/>
            </div>)

  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
