import Axios from 'axios'
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from '../constants/userConstant'
export const signIn = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload:{email, password}});
    try{
        const {data} = await Axios.post('/api/signin', {email, password})
        dispatch({type: USER_SIGNIN_SUCCESS, 
                   payload: data 
                    })
        localStorage.setItem('userinfo', JSON.stringify(data))

    } catch(err){
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: err.response && err.response.data.message 
                     ?  err.response.data.message : err.message
        })
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userinfo');
    localStorage.removeItem('cartItems');
    dispatch({type: USER_SIGNOUT});
}