import React from 'react'
import {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import '../App.css'

const FormUser = ({createUser, handleShowForm, showForm, updateUserData, updateUser, setUpdateUserData}) => {
    
    const {register, handleSubmit, reset} = useForm()
    useEffect(() => {
      if(updateUserData){
        reset(updateUserData)
     }  
    }, [updateUserData])
     
    const defaultUser = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
    }

    const submit = data => {
        if(updateUserData){
            updateUser(data,updateUserData.id)
            handleShowForm()
            setUpdateUserData()
        } else{
        createUser(data)}
        reset(defaultUser)
    }
    return(
        <section className={`container-form ${showForm?"":"hide"}`}>
        <form onSubmit={handleSubmit(submit)} className='form__users'>
            <article className='container-titles'>
            <h2>{`${(updateUserData)?"Edit User":"New User"}`}</h2>
            <i className='bx bx-x' onClick={handleShowForm} ></i>
            </article>
            <label htmlFor='name' className='title__input'>Name</label>
            <input className='input' type="text" id='name'{...register('first_name')} />
            <label htmlFor='lastname' className='title__input'>Last Name</label>
            <input className='input' type="text" id='lastname' {...register('last_name')}  />
            <label htmlFor='email' className='title__input'>Email</label>
            <input className='input' type="email" id='email' {...register('email')} />
            <label htmlFor='password' className='title__input'>Password</label>
            <input className='input' type="password" id='password' {...register('password')} />
            <label htmlFor='birth' className='title__input'>Date of Birth</label>
            <input className='input' type="date" id='birth' {...register('birthday')}  />
            <button className='btn__add' type='submit' onClick={handleShowForm}>{`${(updateUserData)?"Edit User":"Create User"}`}</button>
        </form>
        </section>
    )
}

export default FormUser