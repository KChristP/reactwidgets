import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {selectedTab: 'one'};
  }

  handleClick(title){
    this.setState({selectedTab: title});
  }

  render(){
    const tabContent = this.props.arrayOfObjs.map(obj=>{
      if(obj.title === this.state.selectedTab){
        return(
          <li key={obj.title}>
            <h1><strong>{obj.title}</strong></h1>
            <article>{obj.content}</article>
          </li>
        );
      } else {
        return (
          <li key={obj.title}>
            <h1 onClick={this.handleClick.bind(this, obj.title)}>
              <strong>{obj.title}</strong>
              </h1>
          </li>
        );
      }
    });
    return(
      <ul className="tabs group">
        {tabContent}
      </ul>
    );
  }
}

export default Tabs;
