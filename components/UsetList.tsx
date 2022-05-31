import { IUserListProps } from "../types/UserListTypes"
import User from "./User"

const UserList = ({ users }: IUserListProps) => {
  return <div className="">
    <h1>User List</h1>
    <ul>
      {users.map(user => <User key={user.id} {...user} />)}
    </ul>
  </div>
}

export default UserList