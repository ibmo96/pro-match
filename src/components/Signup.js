import { FormatListBulletedTwoTone } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap' 
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom";



export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('') //empty string, we dont have an error to begin with
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e){ //has to be an asynchronous function in order to wait the signup function in the try/catch
        e.preventDefault()

        //password confirmation check
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
               return setError('Passwords do not match!')     
             }

        try {
            setError('')
            setLoading(true)  //spreventing us from pressing the sign up button again when in a 'loading' state (must set the 'disabled' trait on the relevant button in the form to check the loading const)
            await signup(emailRef.current.value, passwordRef.current.value) 
            history.push("/")

        } catch {
            setError('Failed to sign-up')
        }
        
        setLoading(false) //set initial firebase user-auth loading to false
    }
    
    return (
        <>
         <Card>
             <Card.Body>
                 <h2 className="text-center mb-4"> Sign Up </h2>
                 {error && <Alert variant="danger">{error}</Alert>}
                 <div className= "w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>   
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
                     <Form.Group id="password-confirm">
                         <Form.Label>Password Confirmation</Form.Label>
                         <Form.Control type="password" ref={passwordConfirmRef} required/>
                     </Form.Group>
                     <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                 </Form>
             </Card.Body>
         </Card>  
        </>
    )
}
