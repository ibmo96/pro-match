import { FormatListBulletedTwoTone } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap' 
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom";



export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("") //empty string, we dont have an error to begin with
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e){ //has to be an asynchronous function in order to wait the signup function in the try/catch
        e.preventDefault()

        try {
            setError("")
            setLoading(true)  //spreventing us from pressing the sign up button again when in a 'loading' state (must set the 'disabled' trait on the relevant button in the form to check the loading const)
            await login(emailRef.current.value, passwordRef.current.value) 
            history.push("/")

        } catch {
            setError("Failed to sign-in")
        }
        
        setLoading(false)
    }
    
    return (
        <>
         <Card>
             <Card.Body>
                 <h2 className="text-center mb-4"> Log In </h2>
                 {error && <Alert variant="danger">{error}</Alert>}
                 <div className= "w-100 text-center mt-2">
                    Dont have an account? <Link to="/signup">Sign Up</Link>  
                </div> 
                 <Form onSubmit={handleSubmit}>
                     <Form.Group id="email">
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" ref={emailRef} required/>
                     </Form.Group>
                     <Form.Group id="password">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" ref={passwordRef} required/>
                     </Form.Group>
                     <Button disabled={loading} className="w-100" type="submit">Login</Button>
                 </Form>
             </Card.Body>
         </Card>  
        </>
    )
}
