// 3rd Party
var React = require('react');

// Local imports
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ListingComponent;


var AppComponent = React.createClass({
  render: function(){
    return (
      <div>
        <header className="container-fluid main-header">
          <a className="add-image" href="#"><i className="glyphicon glyphicon-plus"></i></a>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FormComponent />
            </div>
          </div>

          <div className="row">
            <ListingComponent />
          </div>

        </div>
      </div>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
};
