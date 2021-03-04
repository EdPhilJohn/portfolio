import 'bootswatch/dist/lux/bootstrap.min.css';
import profileStyle from '../styles/profile.module.css'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Email from '../components/Email'
const Profile = () => {
    return (
        <div>
           
        <div className={profileStyle.bordershadow}>
        <br />
		
        <div class="card mb-3">
        <h3 class="card-header">Profile</h3>
        <div class="card-body">
            <h5 class="card-title">Computer Engineer</h5>
            <h6 class="card-subtitle text-muted">London, Ontario</h6>
        </div>
       
            
        <div class="card-body">
                        <h4> <p class="card-text text-info">Hello, i am an aspiring software engineer who loves to code, play games and listens to music.Thank you visiting my page... </p></h4>
                        <p className="text-success"> I completed my Bachelors in <b>Computer Science Engineering</b> from Univeristy of Kerala in 2018. Then i came to Canada in 2019 and completed Post Graduate Diploma in <b>Network and Security Architecture. I am currently doing another course in <b>Information Security Management</b> and is expected to graduate April, 2021</b>.Check my projects and technical skills to know more about me.</p>
                        <h4 className="text-danger">To contact me, click on the links below.</h4>
                    </div>
               
        <div class="card-body">
                <Container className={profileStyle.cont}>
                    <Row>
                        <Col><a href="https://www.messenger.com/t/100004345866244/" data-toggle="tooltip" data-placement="top" title="connect on messenger" target="_blank"><img src="https://th.bing.com/th/id/Rac7c4437586fd33b6b0f65925408b0ad?rik=kJh6DReIRvwXFg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f03%2ffacebook-icon-black-circle_254679.png&ehk=PJz2yb%2f5GnyRVTUD4NeqYvqvyCUM9xjtrNtFtJdIcS8%3d&risl=&pid=ImgRaw" width="25px" height="25px" /></a> </Col>
                        <Col><a href="https://www.instagram.com/edphiljohn/" data-toggle="tooltip" data-placement="top" title="connect at edphiljohn" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/1024px-Black_Instagram_icon.svg.png" width="25px" height="25px" /></a> </Col>
                        <Col><a href="https://www.linkedin.com/in/edphiljohn/" data-toggle="tooltip" data-placement="top" title="connect at edphiljohn" target="_blank"><img src="https://th.bing.com/th/id/Re154da526210b69c549e5f0be902e1e2?rik=u%2bSAd9hSWdRDTg&riu=http%3a%2f%2fwww.iconninja.com%2ffiles%2f902%2f874%2f330%2fblack-linkedin-icon.png&ehk=6XV8bsBxoGYluZMJbs%2b7ykais3MagL8DsU%2bqnDAYzGc%3d&risl=&pid=ImgRaw" width="28px" height="28px" /></a></Col>
                        <Col> <a href="mailto:edphiljohn@gmail.com" data-toggle="tooltip" data-placement="top" title="mail to @edphiljohn@gmail.com" target="_blank"><img src="https://th.bing.com/th/id/R3ea5d09ed6d30dbf6f1f4871e5e4c788?rik=eup%2fip%2b%2bPb5cTA&riu=http%3a%2f%2fwww.iconninja.com%2ffiles%2f251%2f835%2f636%2fblack-email-icon.png&ehk=MRfsAEsSVSSBYQmxuFfZs9MoETTvHG4hR5pfgPcsx6k%3d&risl=&pid=ImgRaw" width="28px" height="28px" /></a> </Col>
                        <Col><a target="_blank" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="search at edphiljohn" href="https://github.com/EdPhilJohn" class="card-link"><img src="https://cdn.afterdawn.fi/v3/news/original/github-logo.png" width="28px" height="28px" /></a></Col>
                            </Row>

                    </Container>
           
              
</div>
   
    </div>
            </div>
            </div>)
}
export default Profile
