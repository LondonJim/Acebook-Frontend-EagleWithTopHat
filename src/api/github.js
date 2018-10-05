
import request from './request'

// const getUser = user => request(`https://api.github.com/users/${user}`)
const getUser = user => request(`https://acebook-eaglewithtophat.herokuapp.com/users/${user}`)


export { getUser }
