import React from 'react';
import Item from './components/Item/Item';
import ItemForm from './components/ItemForm/ItemForm';
import './App.css';

class App extends React.Component {
  // state = {
  //   items: [],
  //   inputValue: '',
  //   count: 0
  // }

  // onAddElement = () => {
  //   if(this.state.inputValue != '') {
  //     this.setState({items: [...this.state.items, {id: Date.now(), title: this.state.inputValue, completed:false}]})
  //     this.setState({inputValue: ""})
  //   }
  // }

  // onInputValueChange = (e) => {
  //   this.setState({inputValue: e.target.value})
  // }
 
  render() {
    return (
      <>
      <ItemForm/>
      {/* <div className='wrapper'>
        <h1>
          To do list
        </h1>
          <ul>
            {this.state.items.map(item =>
              <Item
                item = {item.title}
                key= {item.id}
              />
              )}
          </ul>
          
        
          <div className="input-wrap">
            <input type="text" placeholder='enter your task' value={this.state.inputValue} onChange={this.onInputValueChange}/>
            <button onClick={this.onAddElement}>add</button>
          </div>
        </div> */}
      </>
    )
  }
}

export default App;


// style={item.completed === true ? {background:'red'} : {}}