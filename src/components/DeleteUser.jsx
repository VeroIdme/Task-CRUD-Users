import React from 'react'
import '../App.css'

const DeleteUser = ({showDelete, handleShowDelete, nameDelete}) => {
  return (
    <div className={`container-form delete ${showDelete?"":"hide"}`}>
        <div className='container-info-delete'>
        <article className='container-titles'>
            <h2>Delete User</h2>
            <i className='bx bx-x' onClick={handleShowDelete} ></i>
        </article>
        <p>The user {`${nameDelete}`} has been deleted</p>
        <button className='btn__add'onClick={handleShowDelete}>Aceptar</button>
        </div>
    </div>
  )
}

export default DeleteUser