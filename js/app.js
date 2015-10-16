var React = require('react');

var Base = React.createClass({
  render: function(){
    return (<h1>Hey there</h1>);
  }
});

React.render(
  <Base/>,
  document.getElementById('content')
);
