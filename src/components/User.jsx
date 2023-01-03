import React from 'react'
import { useRef } from 'react'
import '../App.css'

const User = ({user, deleteUser, handleShowForm, setUpdateUserData, handleShowDelete, setNameDelete}) => {


     const updateData = () => {
        handleShowForm()
        setUpdateUserData(user)
     }

     const handleDeleteUser = () => {
        setNameDelete(user.first_name+" "+user.last_name)
        handleShowDelete()
        deleteUser(user.id) 
     }
    return (
        <section className='user-card'>
            <h3 className='name-user'>{`${user.first_name} ${user.last_name}`}</h3>
            <h3 className='title-user email'><span>EMAIL</span><br/>{`${user.email}`}</h3>
            <h3 className='title-user birth'><span>DATE OF BIRTHDAY</span><br/>{`${user.birthday}`}</h3>
            <div className='btn-container'>
            <i className="bx bx-trash" onClick={handleDeleteUser} ></i>
            <i className='bx bx-pencil'onClick={updateData}></i>
            </div>
        </section>
    )
}

export default User