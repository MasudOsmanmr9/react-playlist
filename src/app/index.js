var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
import {Router,Route,browserHistory,Link} from 'react-router-v3'
require('./css/index.css');

var TodoItem = require('./todoItem')
var AddItem = require('./AddItem')
var About = require('./about')
//create TodoComponent component

var App = createReactClass({
    render:function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        )
    }
})

var TodoComponent = createReactClass({
    getInitialState:function(){
        return{
            todos:['wash upss','eat some cheese','take a nap'],
            age : 29
        }
    },
    
    render:function(){
        // var {name,age,height} = this.props.msg
        var todos = this.state.todos.map((val)=>{
            return <li>{val}</li>
        })
        var vm = this;
        // var age = setTimeout(function(){
        //     this.setState({
        //         age:35
        //     });
        // }.bind(this),3000);

        return(
            <div id="todo-list">
                <h1>helllloww world!!</h1>
                <p>Helllow</p>
                {/* <p><strong>name :</strong>{name}</p>
                <p><strong>height :</strong>{height}</p>
                <h2>props Age is : {age}</h2>
                <h2>state's Age is : {this.state.age}</h2> */}
                <Link to={'/about'}>About</Link>
                <ul>
                {this.state.todos && this.state.todos.map((val,index)=>{
                    // return <li key={index}>{val}</li>
                    return <TodoItem todo={val} key={index} onDelete={this.onDelete}/>
                })}
                </ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    },

    //custom function
    onDelete(item){
        var updateTodos = this.state.todos.filter((val)=>{
            return item != val;
        })
        this.setState({
            todos:updateTodos
        })
    },
    onAdd(item){
        var updatedTodoList = [...this.state.todos,item]
        this.setState({
            todos:updatedTodoList
        })
    },
    // life cycle function
    componentWillMount:function(){
        console.log('componentWillMount');
    },

    componentDidMount(){
        console.log('componentDidMount');
    },
    componentWillUpdate(){
        console.log('componentWillupdate');
    }
});



var me={name:'masud osman',age:'26',height:'5.9'}

ReactDOM.render(<App/>,document.getElementById('todo-wrapper'))