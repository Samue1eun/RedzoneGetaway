///////////////////////-----IMPORTS------------///////////////////////

import axios from 'axios'

//////////////////////-----BASE URL------------///////////////////////

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/'
})

///////////////////////-----SIGN UP------------///////////////////////

export const userSignup = async(formData) => {
  const { email, password, userName } = formData
  console.log(formData)

  let response = await api.post(
    'users/signup/',
    {
      email : email,
      password : password,
      username : userName
    }
  )

  try{
    if (response.status === 201){
      let {token, username, id, email} = response.data 
      localStorage.setItem('token', token)
      api.defaults.headers.common['Authorization'] = `Token ${token}`
      return {'id' : id, 'username': username, 'email' : email}
    }
  }catch (error){
    console.error('Error in "userSignup" function. check utilities.jsx:', error.message)
  }
  
}

///////////////////////-----LOG IN-------------///////////////////////

export const userLogin = async(formData) => {

  const {email, password} = formData

  let response = await api.post(
    "users/login/",
    {
      email: email,
      password: password
    }
  )

  try{
    if (response.status === 200){
      let {token, username, id, email} = response.data 
      localStorage.setItem('token', token)
      api.defaults.headers.common['Authorization'] = `Token ${token}`
      return {'id' : id, 'username': username, 'email' : email}
    }
  }catch (error){
    console.error('Error in "userLogin" function. check utilities.jsx:', error.message)
  }
}

///////////////////////-----LOG OUT------------///////////////////////

export const logOut = async() =>{

  let response = await api.post('users/logout/')

  try{
    if (response.status === 204){
      localStorage.removeItem('token')
      delete api.defaults.headers.common['Authorization']
      return null
    }
  }catch (error){
    console.error('Error in "userLogout" function. check utilities.jsx:', error.message)
  }
}

///////////////////////-----INFO---------------///////////////////////

export const getInfo = async() => {

  let token = localStorage.getItem('token')

  try{
    if(token){
      api.defaults.headers.common['Authorization'] = `Token ${token}`
      let response = await api.get('users/info/')
      if (response.status === 200){
        return {'id' : id, 'username': username, 'email' : email}
      }
      else{
          return null
      }
    }
  }catch (error){
    console.error('Error in "getInfo" function. check utilities.jsx:', error.message)
  }
  
}

///////////////////////-----SPORT DATA API-----///////////////////////



///////////////////////-----MAP API------------///////////////////////


