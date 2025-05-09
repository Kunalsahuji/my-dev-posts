import UserContext from './context/UserContext'
import Header from './components/Header'
import Profile from './components/Profile'

const App = () => {
  const user = {
    name: 'Kunal Sahuji',
    email: 'kunal@gmail.com ',
    age: 25,
  }
  return (
    <UserContext.Provider value={{ user }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', gap: '20px', }}>
        <Header />
        <hr style={{ backgroundColor: 'skyblue', color: 'red', width: '50vw', height: '.5vh' }} />
        <Profile />
      </div>
    </UserContext.Provider>
  )
}

export default App
