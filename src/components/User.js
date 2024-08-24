import React from 'react';
import AddUser from './AddUser';
import { SlPencil, SlUserUnfollow } from "react-icons/sl";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return(<div className='user'>
            <SlUserUnfollow className='DeleteButton' onClick={() => this.props.onDelete(this.user.id)} />
            <SlPencil onClick={() => this.setState({
                editForm: !this.state.editForm
            })} className='EditButton' />
            <img src={this.user.avatar} alt=''/>
            <h3 className='areas'>{this.user.first_name} {this.user.last_name}</h3>
            <p className='areas'>{this.user.email}</p>
            <h4 className='areas'>Отзыв:</h4>
            <p className='areas'>{this.user.Feedback}</p>

            {this.state.editForm && <AddUser user = {this.user} Add = {this.props.onEdit}/>}
        </div>)
    }    
}

export default User