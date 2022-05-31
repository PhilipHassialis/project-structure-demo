export type User = {
  id: number,
  name: string,
  username: string,
  email: string
}

export interface IUserListProps {
  users: User[],
}