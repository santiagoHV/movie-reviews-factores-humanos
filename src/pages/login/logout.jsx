import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { logout } from "../../reducers/authSlice"
import { showAlert } from "../../reducers/notificationSlice"

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const notification = {
            style: 'info',
            message: 'Se ha cerrado sesion'
        }
        dispatch(logout())
        navigate("/")
        dispatch(showAlert(notification))
    })
}

export default Logout