import './App.css'
import { AppBar } from './components/organisms/app-bar'
import { useAppSelector } from './hooks/redux'
import { useGetAllUsersQuery } from './redux/features/user'

export default function App() {
  const { users } = useAppSelector(state => state.user)
  const { isLoading } = useGetAllUsersQuery({})

  return (
    <>
      <AppBar />
      {
        isLoading ? (
          <h1>Cargango...</h1>
        ) : (
          <>
            <h1>Página de inicio</h1>
            {
              users.map(({ id, name, last_name }) => (
                <p key={id}>{`${name} ${last_name}: ${id}`}</p>
              ))
            }
          </>
        )
      }
    </>
  )
}
