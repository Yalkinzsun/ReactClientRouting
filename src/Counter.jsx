import React, { Component as C } from 'react';

class Counter extends C {
  constructor(props) {
    super();
    const { stars } = props;
    this.state = { stars };
  }
	
  componentWillReceiveProps(nextProps) {
    this.setState({ stars: nextProps.stars });
  }
  plus() {
    const stars = +this.state.stars + 1;
    this.setState({ stars });
  }
  
  minus() {
    if (+this.state.stars <= 0)
			return;
		const stars = +this.state.stars - 1;
		this.setState({ stars });
  }
  
  render() {
    return (
      <div><h3>Лайкер</h3> <hr />
        <button class="btn btn-light" onClick={() => this.minus()}><span role="img">➖</span></button>
        <button class="btn btn-light" onClick={() => this.plus()}><span role="img" aria-label="add">➕</span></button> 
        <Stars length={this.state.stars} />
    </div>);
  }
}
const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;


export default () => (
  <div><Counter stars= "1" />
</div>); 

