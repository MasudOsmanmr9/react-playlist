var React = require('react');
var createReactClass = require('create-react-class');
require('./css/addItem.css')

var AddItem = createReactClass({
    render:function(){
        return(
            <form id="add-todo" onSubmit={this.handelSubmit}>
                <input type="text" ref="newItem" required/>
                <input type="submit" value="Hit me"/>
            </form>
        );
    },

    //custom function
    handelSubmit:function(e){
        e.preventDefault();
        var newItem = this.refs.newItem.value
        this.props.onAdd(newItem)
        this.refs.newItem.value = ''
    }
});

module.exports = AddItem;