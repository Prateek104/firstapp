import React , {Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'
import './App.css';

class App extends Component {

  state = {
    counters : []
    }

    addCounters=(event)=>
    {
  const counters = [...this.state.counters];
  counters.length = 0;
  for (let i=0; i<event.target.value; i++)
  {counters.splice(0,0,{id:i, value:0})};
  this.setState({counters});
    }

  handleDelete=counterId=>
  {
    const counters = this.state.counters.filter(c=> c.id!== counterId);
    this.setState({counters});
  }
  handleReset=()=>
  {
    const counters = this.state.counters.map(c=> {c.value=0;
    return c});
    this.setState({counters})
  }

  handleIncrement=counter=>
  {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value++;
  this.setState({counters});
  }

  render()
  {

    return (
      <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
    <main className ='container'>
    {
        <Counters
        counters = {this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}/>
    }
    <p>Enter the number of counters req: <input type="number" onChange={this.addCounters} /> </p>
    </main>
    </React.Fragment>
  )
}
}

export default App;
