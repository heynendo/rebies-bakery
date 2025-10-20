import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import '../styles/contact.css'

function Contact(){
    const API_URL = import.meta.env.DEV
        ? "http://localhost:8787/" // localhost dev
        : "https://emailserver-resend.heynen-donovan.workers.dev/"

    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [sendError, setSendError] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function UpdateData(e){
        const { name, value } = e.target

        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))

        if (submitted) setSubmitted(false)
        if (sendError) setSendError("")
    }

    function validate(){
        const newErrors = {}
        if (userInput.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters."
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(userInput.email)) {
            newErrors.email = "Please enter a valid email address."
        }

        if (userInput.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters."
        }
        return newErrors
    }

    async function SendUserData(e){
        e.preventDefault()

        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setSubmitted(false)
            return
        } else {
            setErrors({})
        }

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInput),
            })
            if (response.ok) {
                console.log("Message sent:",  await response.text())
                alert("Message sent.")
                setSubmitted(true)
                setErrors({})
                setUserInput({ name: "", email: "", subject: "", message: "" })
            } else {
                console.error("Failed to send message:", await response.text())
                alert("Failed to send message")
                setSendError("Message failed to send")
            }
        } catch (err) {
            console.error("Error sending form:", err)
            setSendError("Message failed to send")
            alert("Failed to send message")
        }
    }

    return(
        <div className="contact">
            <PageTitle content="Let's Chat" />
            <div className='grid'>
                <div className='aside'>
                    <p>Have something specific in mind? Send an email and let me know what you're looking for!</p>
                    <a href="mailto:rebiesbakery@gmail.com">rebiesbakery@gmail.com</a>
                </div>
                <form onSubmit={SendUserData}>
                    {errors.name && <div className='error'>{errors.name}</div>}
                    <div className='container'>
                        <label htmlFor = "name">Name:</label>
                        <input 
                            id = "name"
                            name = "name"
                            value={userInput.name}
                            onChange={UpdateData}
                            autoComplete="on" 
                        />
                    </div>
                    {errors.email && <div className='error'>{errors.email}</div>}
                    <div className='container'>
                        <label htmlFor = "email">Email:</label>
                        <input 
                            id = "email"
                            name = "email"
                            value={userInput.email}
                            onChange={UpdateData}
                            autoComplete="on" 
                        />
                    </div>
                    <div className='container'>
                        <label htmlFor = "subject">Subject:</label>
                        <input 
                            id = "subject"
                            name = "subject"
                            value={userInput.subject}
                            onChange={UpdateData}
                            autoComplete="off" 
                        />
                    </div>
                    {errors.message && <div className='error'>{errors.message}</div>}
                    <div className='container'>
                        <label htmlFor = "message">Message:</label>
                        <textarea 
                            id = "message"
                            name="message"
                            value={userInput.message}
                            onChange={UpdateData}
                            autoComplete="off" 
                        />
                    </div>
                    {/*submitted && <div className='success'>Your message has been sent!</div>*/}
                    {/*sendError && <div className='error'>{sendError}</div>*/}
                    <button type='submit' className='basic-button'>send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact