import React from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import axios from 'axios';

const baseUrl = 'https://reqres.in/api/users?page=1'

class GeneralComp extends React.Component {
  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState({Users: res.data.data})
    })

    this.state = {
        Users: []
    }
    this.adduser = this.adduser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}

  render() {
    return(
      <><main>
        <UsersList Users={this.state.Users} onDelete = {this.deleteUser} onEdit = {this.editUser}/>
      </main>
      <aside>
      <AddUser Add={this.adduser}/>
      </aside></>
    )
  }
    adduser(user) {
      const id = this.state.Users.length + 1
      this.setState({ Users: [...this.state.Users, {id, ...user}]})
    }

    deleteUser(id) {
      this.setState({
        Users: this.state.Users.filter((el) => el.id !== id)
      })
    }
    
    editUser(user) {
      let allUsers = this.state.Users
      allUsers[user.id - 1] = user
      
      this.setState({Users: []}, () => {
        this.setState({Users: [...allUsers]})
      })
    }
}


export default GeneralComp
