import { Card } from "react-bootstrap"
import './policies.css'

const TermsAndConditions = () => {
    return (
        <>
            <Card style={{ maxWidth: '1000px', margin: '50px auto', padding: '50px' }}>
                <Card.Body>
                    <Card.Title>Contrato de Protección de Información Personal</Card.Title>
                    <section>
                        <Card.Subtitle>1. Confidencialidad y Seguridad</Card.Subtitle>
                        <Card.Text>
                            Nos comprometemos a mantener tu información en estricta confidencialidad y a implementar medidas de seguridad adecuadas para protegerlas de accesos no autorizados, divulgación o alteración.
                        </Card.Text>
                    </section>

                    <section>
                        <Card.Subtitle>2. Recopilación de Información</Card.Subtitle>
                        <Card.Text>
                            La información de usuario será recopilada a través del aplicativo de manera segura y dependiente de tu acceso por medio de mail y contraseña, la cual estará cifrada.
                        </Card.Text>
                    </section>

                    <section>
                        <Card.Subtitle>3. Derechos del Explorador de Información</Card.Subtitle>
                        <Card.Text>
                            Tienes el derecho de acceder a tus datos en nuestro poder, actualizarlos si están incompletos o inexactos, y solicitar su eliminación si ya no son necesarios para los fines acordados.
                        </Card.Text>
                    </section>

                    <section>
                        <Card.Subtitle>4. Uso de Información</Card.Subtitle>
                        <Card.Text>
                            Solo utilizaremos tus datos para los fines específicos mencionados en este contrato. No venderemos, compartiremos ni divulgaremos tus datos a terceros sin tu consentimiento, a menos que la ley lo exija.
                        </Card.Text>
                    </section>

                    <section>
                        <Card.Subtitle>5. Duración del Contrato</Card.Subtitle>
                        <Card.Text>
                            Este contrato entrará en vigencia desde la fecha de aceptación y continuará mientras tengamos tu información en nuestro poder. Puedes rescindir este contrato en cualquier momento mediante notificación por escrito.
                        </Card.Text>
                    </section>
                </Card.Body>
            </Card>
        </>
    )
}
export default TermsAndConditions