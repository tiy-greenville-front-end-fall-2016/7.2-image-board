var React = require('react');


var FormComponent = React.createClass({
  render: function(){
    return (
      <form className="well" action="index.html" method="post">
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input type="text" className="form-control" id="url" placeholder="Image URL" />
        </div>
        <div className="form-group">
          <label htmlFor="caption">Image Caption</label>
          <textarea className="form-control" id="caption" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-default">Add Image</button>
      </form>
    );
  }
});


module.exports = {
  FormComponent: FormComponent
};
