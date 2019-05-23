import React from 'react'

class Form extends React.Component {
    

    render = () => {
        console.log(this.props)
        return <form>
            <input type="text" onChange={this.props.onNameChange}  />
        </form>
    }
}

export default Form