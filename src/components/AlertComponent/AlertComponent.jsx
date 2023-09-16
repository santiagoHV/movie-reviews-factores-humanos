import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "../../reducers/notificationSlice";
import './AlertComponent.css'

const AlertComponent = () => {
    // Obtiene las propiedades del estado de notificación
    const { show, style, message } = useSelector(state => state.notification)
    const dispatch = useDispatch();

    // Maneja el cierre de la alerta
    const handleClose = () => {
        dispatch(hideAlert());
    };

    // Efecto secundario para cerrar la alerta después de 1 segundo
    useEffect(() => {
        if (show) {
            const timeoutId = setTimeout(() => {
                handleClose()
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [show, dispatch]);

    // Renderiza la alerta solo si show es verdadero
    const alertContainer = show ? (
        <div className="alertContainer">
            <Alert variant={style} show={show}>
                {message}
            </Alert>
        </div>
    ) : null

    return alertContainer
};

export default AlertComponent;