import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "../../reducers/notificationSlice";

const AlertComponent = () => {
    const { show, style, message } = useSelector(state => state.notification)
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hideAlert());
    };

    useEffect(() => {
        if (show) {
            const timeoutId = setTimeout(() => {
                handleClose()
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [show, dispatch]);

    return (
        <Alert variant={style} show={show} onClose={handleClose} dismissible style={{bottom: '0'}}>
            {message}
        </Alert>
    )
};

export default AlertComponent;