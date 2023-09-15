import { logout } from "../../reducers/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(logout())
    useEffect(() => {
        navigate("/home")
    })
}

export default Logout