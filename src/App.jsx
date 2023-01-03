import { useState, useEffect } from 'react'
import axios from 'axios'
import FormUser from './components/FormUser'
import User from './components/User'
import './App.css'
import DeleteUser from './components/DeleteUser'

function App() {
  const [users, setUsers] = useState()
  const [showForm, useShowForm] = useState(false)
  const [updateUserData, setUpdateUserData] = useState()
  const [showDelete, setShowForm] = useState(false)
  const [nameDelete, setNameDelete] = useState()
  const BASE_URL = 'http://users-crud.academlo.tech/'

  const getUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getUsers()})
      .catch(err => console.log(err))
  }

  const updateUser = (data, id) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUser = id => {
    const URL = `${BASE_URL}users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getUsers()})
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  },[])
  
  const handleShowDelete = () => {
    setShowForm(!showDelete)
  }
  const handleShowForm = () => {
    useShowForm(!showForm)
  }

  return (
    <div className="App">
      <div className='container-header'>
      <h1>Users</h1>
      <button className='btn-create' onClick={handleShowForm}>+ Create New User</button>
      </div>
      <FormUser 
      createUser={createUser} 
      handleShowForm={handleShowForm} 
      showForm={showForm} 
      updateUser={updateUser}
      updateUserData={updateUserData}
      setUpdateUserData={setUpdateUserData}/>
      <div className='container-cards'>
      {
        users?.map(user => (
          <User key={user.id} user={user} 
          deleteUser={deleteUser}  
          handleShowForm={handleShowForm} 
          setUpdateUserData={setUpdateUserData}
          handleShowDelete={handleShowDelete}
          setNameDelete={setNameDelete}
         />
        ))
      }
      <DeleteUser showDelete={showDelete}
      handleShowDelete={handleShowDelete} 
      nameDelete={nameDelete} />
      </div>
    </div>
  )
}

export default App
