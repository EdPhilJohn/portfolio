import { Container, Row, Col } from 'react-bootstrap'
import Introduction from '../components/Introduction'
import Profile from '../components/Profile'
import SocialMedia from '../components/SocialMedia'
import jumboStyles from '../styles/common.module.css'

const MainContent = () => {
    return (
        <div>  
      
            <div className={jumboStyles.data}>
                <Profile />
                </div>
      
        </div>
        )
}
export default MainContent