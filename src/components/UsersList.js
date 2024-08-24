import React from 'react';
import User from './User';

class UsersList extends React.Component {
    render() {
            if(this.props.Users.length > 0)
            return(
                <div>
                {this.props.Users.map((el) => (
                    <User onEdit = {this.props.onEdit} onDelete = {this.props.onDelete} key={el.id} user = {el} />)
                    )
                }
                </div>)
            else
            return(<div className='user'>
                <h3>Пользователей нет</h3>
            </div>
            )
        }
    }
                

  
  export default UsersList