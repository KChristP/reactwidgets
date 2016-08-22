import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ""};
  }

  updateValue(e){
    let newVal = e.currentTarget.value;
    this.setState({value: newVal});

  }

  handleClick(e){
    let newVal = e.currentTarget.innerHTML;
    this.setState({value: newVal});

  }

  render(){
    let liTags = this.props.names.map(name=>{
      let self = this;
      if(self.state.value !== ""){
        let valLength = self.state.value.length;
        if (self.state.value.toLowerCase() === name.slice(0, valLength).toLowerCase()){
          return(
            <li key={name} onClick={this.handleClick.bind(this)}>{name}</li>
          );
        }
      } else {
        return(
          <li key={name}>{name}</li>
        );
      }
    });

    return(
      <div>
        <input onChange={this.updateValue.bind(this)} type="text" name="name" value={this.state.value} />
          <ul>
            {liTags}
          </ul>
      </div>
    );
  }
}


export default Autocomplete;
