import type { NextPage, GetServerSideProps } from 'next'
import UserList from '../components/UsetList'
import { IUserListProps } from '../types/UserListTypes'
import { fetchUsers } from '../utils/UserUtils'


const Home: NextPage<IUserListProps> = (props) => {
  console.log(props)
  return (
    <div>
      <UserList users={props.users} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const usersData = await fetchUsers()
  return {
    props: {
      users: usersData
    }
  }

}

export default Home
