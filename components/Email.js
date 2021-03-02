import {useState} from 'react'
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
export default function Email() {
    const [name,setName]=useState('')
    const [emailID, setEmailID] = useState('')
    const [message, setMessage] = useState('')
   
    const handleSubmit = (e) => {
        e.preventDefault()
        let dataCombined = { name, email: emailID, message }
        window.alert(dataCombined)
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(dataCombined),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })

    }
    function resetForm() {
        setEmailID('')
        setMessage('')
        setName('')
    }
    return (
        <Form method="POST" onSubmit={()=>handleSubmit}>
            <Form.Group controlId="formBasicText">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name here...." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={emailID} onChange={(e)=>setEmailID(e.target.value)} placeholder="Enter your email here..." />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicText">
                <div class="form-group">
                    <label htmlFor="exampleTextarea">Enter Your Message Here</label>
                    <textarea class="form-control" id="exampleTextarea" value={message} onChange={(e) => setMessage(e.target.value)} rows="3" placeholder="Enter your message here..."></textarea>
                </div>
                
            </Form.Group>
        
            <Button variant="danger" type="submit">
                Send Email..
  </Button>
        </Form>

)
}