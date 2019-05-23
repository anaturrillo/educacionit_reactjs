import React from 'react'
import UserList from '../Users/UserList'
import UserCard from '../Users/UserCard'
import Filter from '../Filter/Filter'
const usuarios = require('../../usuarios.json')

class Container extends React.Component {
    state = {currentUser: null, users: [], allUsers: []};

    componentWillMount = () => {
        this.setState({allUsers: usuarios, users: usuarios})
    }

    selectUser = (user) => (e) => {
        this.setState({currentUser: user})
    }

    filter = (e) => {
        const query = e.target.value.toUpperCase();
        if (query) {
            this.setState((prevState, props) => {
                const newUserList = prevState.allUsers.filter(user => {
                    const userValues = `${user.nombre} ${user.apellido} ${user.email}`
                    const isInvalues = userValues.toUpperCase().indexOf(query) !== -1
                     
                    return isInvalues
                })
    
                return {users: newUserList}
            })
        } else {
            this.setState({users: usuarios})
        }
        
    }

    render = () => {
        return <div className="row">
            <div className="col-6">
                <Filter onFilterChange={this.filter} />
                <UserList usuarios={this.state.users} selectUser={this.selectUser} />
            </div>
            <div className="col-6">
                <UserCard user={this.state.currentUser} />
            </div>
        </div>
    }
}

export default Container