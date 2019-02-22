import axios from 'axios'

const server = axios.create({
  baseURL: 'http://120.78.87.58:8083',
  timeout: 5000

})

const login = function(data) {
  const bodyForm = new FormData()
  bodyForm.set('username', data.username)
  bodyForm.set('password', data.password)
  bodyForm.set('role', data.role)
  bodyForm.set('verificationCode', data.verificationCode)

  return server({
    url: '/admin/addlogin',
    method: 'post',
    data: bodyForm,
    config: { headers: { 'Content-Type': 'multipart/form-data' }}
  })
}

export default login
