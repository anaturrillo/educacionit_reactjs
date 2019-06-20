import React from 'react'
import {Transition} from 'react-transition-group'

class TransitionComponent extends React.Component {

  componentWillReceiveProps = (nextProps, nextContext) => {
    if (nextProps.in !== this.state.in) {
      this.setState(nextProps)
    }
  };

  componentWillMount() {
    this.setState({in: this.props.in})
  }

  defaultStyles =  {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
  };

  transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  render = () => {
    return <Transition in={this.state.in} timeout={300}>
      {state => (
        <div style={{...this.defaultStyles, ...this.transitionStyles[state]}}>
          HOLA AMIGOS
        </div>
      )}
    </Transition>
  }
}

export default TransitionComponent
