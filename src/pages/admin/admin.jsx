import ListDisplayer from "../../components/ListDisplayer/ListDisplayer"

const Admin = () => {
    const movies = [
        {
            "name": "Titanic",
            "data": "2023-09-24T10:00:00Z",
            "url": "http://ejemplo.com/titanic"
        },
        {
            "name": "El Padrino",
            "data": "2023-09-24T10:15:00Z",
            "url": "http://ejemplo.com/elpadrino"
        },
        {
            "name": "Avatar",
            "data": "2023-09-24T10:30:00Z",
            "url": "http://ejemplo.com/avatar"
        },
        {
            "name": "Jurassic Park",
            "data": "2023-09-24T10:45:00Z",
            "url": "http://ejemplo.com/jurassicpark"
        },
        {
            "name": "Harry Potter y la piedra filosofal",
            "data": "2023-09-24T11:00:00Z",
            "url": "http://ejemplo.com/harrypotter"
        },
        {
            "name": "Star Wars: Episodio IV - Una nueva esperanza",
            "data": "2023-09-24T11:15:00Z",
            "url": "http://ejemplo.com/starwars"
        },
        {
            "name": "E.T. el Extraterrestre",
            "data": "2023-09-24T11:30:00Z",
            "url": "http://ejemplo.com/et"
        },
        {
            "name": "Forrest Gump",
            "data": "2023-09-24T11:45:00Z",
            "url": "http://ejemplo.com/forrestgump"
        },
        {
            "name": "El Señor de los Anillos: La Comunidad del Anillo",
            "data": "2023-09-24T12:00:00Z",
            "url": "http://ejemplo.com/senordelosanillos"
        },
        {
            "name": "El Rey León",
            "data": "2023-09-24T12:15:00Z",
            "url": "http://ejemplo.com/elreyleon"
        }
    ]

    const users = [
        {
            "name": "Usuario1",
            "data": 123456,
            "url": "http://ejemplo.com/usuario1"
        },
        {
            "name": "Usuario2",
            "data": 234567,
            "url": "http://ejemplo.com/usuario2"
        },
        {
            "name": "Usuario3",
            "data": 345678,
            "url": "http://ejemplo.com/usuario3"
        },
        {
            "name": "Usuario4",
            "data": 456789,
            "url": "http://ejemplo.com/usuario4"
        },
        {
            "name": "Usuario5",
            "data": 567890,
            "url": "http://ejemplo.com/usuario5"
        },
        {
            "name": "Usuario6",
            "data": 678901,
            "url": "http://ejemplo.com/usuario6"
        },
        {
            "name": "Usuario7",
            "data": 789012,
            "url": "http://ejemplo.com/usuario7"
        },
        {
            "name": "Usuario8",
            "data": 890123,
            "url": "http://ejemplo.com/usuario8"
        },
        {
            "name": "Usuario9",
            "data": 901234,
            "url": "http://ejemplo.com/usuario9"
        },
        {
            "name": "Usuario10",
            "data": 123123,
            "url": "http://ejemplo.com/usuario10"
        }
    ]

    return (
        <>
            <section>
                <h2>Peliculas por aprobar</h2>
                <ListDisplayer elements={movies} />
            </section>
            <section>
                <h2>Usuarios</h2>
                <ListDisplayer elements={users} />
            </section>
        </>
    )
}
export default Admin