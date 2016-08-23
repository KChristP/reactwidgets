import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import WidgetClock from './clock.jsx';
import Weather from './weather';
import Autocomplete from './autocomplete';

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets />, root);
});

class Widgets extends React.Component{
  constructor(){
    super();
    this.arrayOfObjs = [{title: 'one', content: 'I am the first'},
      {title: 'two', content: 'I am the second'},
      {title: 'three', content: 'I am the third'}];
  }

  render(){
    return (
      <div>
        <Tabs arrayOfObjs={this.arrayOfObjs}/>
        <WidgetClock />
        <Weather/>
        <Autocomplete names={["Abba", "Barney", "Concord", "Deuce", "England", "Apple", "avocado"]}/>
      </div>
    );
  }
}
