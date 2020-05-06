import React from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import List from './components/List';
// import Data from './Data';

const url = "https://cors-anywhere.herokuapp.com/https://api.github.com/users/"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: '',
      userSearch: '',
      list:[]
    }
  }

  componentDidMount() {
    axios
      .get(`${url}jiayi-ren`)
      .then(res =>{
        this.setState({
          list:[
            ...this.state.list,
            res.data
          ]
        })
        this.getFollowers('jiayi-ren')
      })
      .catch(err =>{
        console.log(err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.userSearch !== prevState.userSearch){
      console.log("searched")
      axios
      .get(`${url}${this.state.userSearch}`)
      .then(res =>{
        this.setState({
          list:[res.data]
        })
        this.getFollowers(this.state.userSearch)
      })
      .catch(err =>{
        console.log(err)
      })
    }
  }

  getFollowers = user =>{
    axios
      .get(`${url}${user}/followers`)
      .then(res =>{
        res.data.forEach( follower =>{
          axios
          .get(`${url}${follower.login}`)
          .then(res =>{
            console.log(res.data)
            this.setState({
              list:[
                ...this.state.list,
                res.data
              ]
            })
          })
          .catch(err =>{
            console.log(err)
          })
        })
      })
      .catch(err =>{
        console.log(err)
      })
  }

  onChange = event =>{
    this.setState({
      user: event.target.value
    })
  }

  onSubmit = event =>{
    event.preventDefault()
    this.setState({
      user: '',
      userSearch: this.state.user
    })
  }

  render() {
    console.log("render")
    return (
      <div className="App">
        <Form user={this.state.user} onChange={this.onChange} onSubmit={this.onSubmit}/>
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
