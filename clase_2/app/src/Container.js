import React, {Component} from 'react'
import Form from './Form'
import Card from './Card'

class Container extends Component {
    state = {name:''}

    changeName = (e) => {
        this.setState({name: e.target.value})
    }

    render = () => {
        console.log(this.state)
        return <div>
            <Form onNameChange={this.changeName} />
            <Card aName={this.state.name} />
        </div>
    }
}

export default Container;