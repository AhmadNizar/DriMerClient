import axios from 'axios'

export const actionRegister = (dataUser) => {
  console.log('Apakah saya masuk sini', dataUser)
  return (dispatch) => {
    axios.post('https://drimer-191803.appspot.com/user/register', {
      dataUser
    })
      .then((dataUser) => {
        console.log(dataUser)
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}