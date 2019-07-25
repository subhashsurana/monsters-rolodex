import React from 'react';
import './App.css';
// eslint-disable-next-line
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/Search-box/search-box.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

    componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}) );
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  
  render() {
    const {monsters,searchField} = this.state;
    const filteredMosters = monsters.filter(monster =>  
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder ='search monsters' 
        handleChange = {this.handleChange}
      />  
        <CardList monsters={filteredMosters}>
        </CardList>
      </div>
    );
  }
}

export default App;