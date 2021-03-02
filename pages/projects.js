import 'bootswatch/dist/lux/bootstrap.min.css';
import projectStyles from '../styles/common.module.css'
import Header from '../components/Header'
import Link from 'next/link';
import Head from 'next/head'
import {CardDeck,Card, Button} from 'react-bootstrap'
export default function Projects() {
    return (<div>
        <Head>
            <title>Amal Edward Portfolio</title>
            <link rel="icon" href="https://th.bing.com/th/id/OIP.1YZC-Gy4hj95QL036kXOAQHaFx?pid=ImgDet&rs=1" />
        </Head>
        <Header/>
        <div className={projectStyles.drop}>
            <br/>
            <div className="container">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" height="200px" src="https://searchengineland.com/figz/wp-content/seloads/2015/12/computer-network-laptops2-ss-1920.jpg" />
                    <Card.Body>
                        <Card.Title>IP Information</Card.Title>
                        <Card.Text>Your Public IP, location is being retrieved from this website</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <Link href="/projects/ipinfo">Click to follow</Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" height="200px" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/HD-delicious-food-photos.jpg" />
                    <Card.Body>
                        <Card.Title>Random Food Recipe</Card.Title>
                        <Card.Text>
                            This Website respond with a random food recipe everytime you visit it.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <Link href="/projects/recipeapi">Click to follow</Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" height="200px" src="https://www.lsi.umich.edu/sites/default/files/styles/paragraph_float_image/public/media/shared/AdobeStock_330293007.jpeg?itok=HkRYAj8g" />
                    <Card.Body>
                        <Card.Title>COVID-19 Statistics</Card.Title>
                        <Card.Text>
                            Data of all the countries affected by the Coronavirus is displayed here.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                     <Link href="/projects/covidapi">Click to follow</Link>
                    </Card.Footer>
                </Card>
                </CardDeck>
                </div>
            </div>
    </div>)

}