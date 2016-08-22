import React from "react";

class WidgetClock extends React.Component {
  constructor(){
    super();
    let date = new Date();

    this.state = {date: (new Date())};
    this.state = { currentHours: this.state.date.getHours(),
      currentMin: this.state.date.getMinutes(), currentSeconds: this.state.date.getSeconds(), currentDate: this.state.date.toDateString()};
  }

  componentDidMount (){
    setInterval(this.callbackToUpdateTime.bind(this), 1000);
  }
  callbackToUpdateTime(){
    // let currentS = this.state.currentSeconds;
    // let currentM = this.state.currentMin;
    // let currentH = this.state.currentHours;
    //
    // currentS+=1;
    // if(currentS === 60){
    //   currentS = 0;
    //   currentM +=1;
    // }
    // if(currentM === 60){
    //   currentM = 0;
    //   currentH += 1;
    // }
    //
    // currentH = currentH === 24 ? 0 : currentH;
    //
    // this.setState({currentHours: currentH,
    //   currentMin: currentM, currentSeconds: currentS});

    this.setState({date: (new Date())});
    this.setState({ currentHours: this.state.date.getHours(),
      currentMin: this.state.date.getMinutes(), currentSeconds: this.state.date.getSeconds(), currentDate: this.state.date.toDateString()})
  }

  render(){
    return (
      <div>
        <h1> Time:
        <p>{this.state.currentHours} : {this.state.currentMin} : {this.state.currentSeconds}</p>
        </h1>
        <h1> Date:
          <p>{this.state.currentDate}</p>
        </h1>
      </div>
    );
  }
}

export default WidgetClock;
