//create todo item component
var React = require('react');
var createReactClass = require('create-react-class');

require('./css/todoItem.css')

var TodoItem = createReactClass({
    render:function(){
        return(
        <li>
            <div className="todo-item" onClick={this.handleDelete}>
               <span className="item-name">{this.props.todo}</span> 
               <span className="item-delete" > x</span>
            </div>
        </li>
        )
        // custom function
     
    },

     handleDelete:function (){
        console.log('working');
        this.props.onDelete(this.props.todo)
    }
})

module.exports = TodoItem;