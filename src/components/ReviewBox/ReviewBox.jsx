import React from "react"
import { Link } from 'react-router-dom';
import './ReviewBox.css'
import { Col, Container, Row } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import StarQualification from "../StarQualification/StarQualification"

const ReviewBox = () => {
    return (
        <Container className="mb-4 style-reseña" >
            <Row>
                <Col sm={2} className="user-image-container" >
                    <Link to="/profile">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAeFBMVEX///8AAADo6OghISHx8fGjo6OUlJS5ubnGxsb8/PzS0tLr6+vW1tb29vaPj49jY2Pg4OCdnZ12dnZYWFiAgICGhoYRERGurq43NzddXV1QUFC1tbXFxcWoqKhAQEA6OjpISEhxcXEwMDAeHh4rKysNDQ1qampEREQRgLraAAAEtklEQVR4nO3c6ZqiOhAG4NZGQEFZFFxxG7Xv/w7PQ0KcbkdtKElMcb7350icqoYsZPHjAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoH2xl8yi6XQazRIvfncwBsXJqvfTKvlf5O8kn717PhPn3aFp1k/vJi6l/XeHp9F49iTz0mz87hB18b6nOc0Kz/d9r8im3//Ze3eQWgyja4Jfg59NWzz4un4WDd8Un0bxWWWX3avW/Ux9fO5ck++r1NxH93Xoqkt8o5Fpp6p69Kwjc1St6FSl39RMSv2JNkaiMmIkM/oMfr0yqAY+IwNRGRHIfPa1Lt7Li3//M/FwFNmsal4tx/pHrREZIwdzX7Wvl339TGNExoQilbz+aHWcixKhxphMOYlMmgxYYlHipC0iY+YikaRRmUSUmWuKyByRxqJhoYUopSUeg+akuht24saL2h41LhZ1oMaPGjd0UtyB0V3aZFTz3Z5/H09+LfPYt3ayzaLMxAzZj29ER70kFV02HxbYRSRQkIoW9D+bHXL6gyuqS95yPAY55OquKjzftRrRS/8hFv5DGxnYwqf27iUxh8F3ytajDWiliPeM7boM/0AsfCgLr1uNxySRe0osnPLOXTzzF2LhC+9nXixJTImFxfIs30WKkDJnoyx4D+iDV17GuC9RiPhpO0n63F9iv+jtlddsQcM+Gb2TE11c1nI8Jm3oL2M572b+42NMnnKUk5yst11NqQ99+srQwA5r4u2TDwzfEW1JzkC4jcu5L8x6WCMj3Xh52zm38iU5tGta41PugzppRmjqZSPPe1WmJB/fZn18zr+Dkwa9pjNXcovhQFtEBu1EKpPa10/E9TuNEZkj38hq30f5nBDf/qzjNUm+Sp3vZNUN+RTX6q+rreT1a4j1DjKj1W9N97g6QEWd17ZSvd3h153mhqIyRJ2PWj1eYYvVqTnqjL61kiqx3uX+3Gt4URdw3nDwwPXUSG9b3I7Ug2J7/ZTv8uMTzvKaX+84W4dO+Yo6dML17Pj3gyXfFffnvHPvuXNnuvU7Bk9T78QQ/on54kHiC+7bZ+uIJ/+mv5jw3V3SkLOZLE9V2qflZNPVBu6xseM4HZigAACQhk6/GYf5iowUz9PtP715Hdt0zrrLj7OclLeSZ1zT39Bu+M3t57j9YLRrIfPSjttpqeHhR/z5ZzM/q8qBVcsX/n1R37t+QNh7EPju/vodZ0ZbDOcq6FPxyluKU6j3HT7HQ9WPtRxfn3rz1XRW860bb1GtwhDPR90qqm9jsVJTTUtt29o1EVRdJYMJrWoqus1VparPsH7yWh4La3m/SPXTb7bP7siOqe1VJbmitW/5W1smezfqsbDHVvb3dHIroYY9gdq+uD2utkbJt72Xl3eHejDquYvlN17Wdj3bIQPLa/xORxuviLaeeuhKO/njJLqmWvR++6vEaFbfnsCdzSNbcUhC344RsWvF1qMU4qHUN80gfzRF29e/RPtpPvH9du41FcOPrcb/YGvv29y87XfXWwd7e3jRzOs845LZ29C7epv5qqG3c0jv6r4tA3tzj3U3w32LB3ajZaR3ESGMltwWqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H3+AxPaJruP+xfFAAAAAElFTkSuQmCC" />
                    </Link>
                </Col>
                <Col sm={10}>
                <Link to="/profile" className="userName">
                    <h3>Jhon Doe</h3>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.</p>
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor="#ffd700"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default ReviewBox