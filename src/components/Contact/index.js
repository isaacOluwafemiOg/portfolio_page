import { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_4w8dwpl',
                'template_lfizibm',
                refForm.current,
                'qj0zEXm6GCMaoGYdh'
            )

            .then(
                () => {
                    alert('Message has been sent! Isaac will get bact to you soon')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, kindly try again.')
                }
            )
    }
    return(
        <div className='container contact-page'>
            <div className='text-zone'>
              <h1>Contact Me</h1>  
                <p>
                    I am open to freelance opportunities and projects in data science
                    and software engineering. Feel free to reach out to me via the form 
                    below. I look forward to hearing from you.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='FirstName LastName' required />

                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='username@provider.com' required />

                            </li>

                            <li>
                                <input type='text' placeholder='Subject' name='subject' required />
                            </li>

                            <li>
                                <textarea placeholder='Message'  name='message' required>
                                    
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>

                        </ul>
                    </form>
                </div>
            </div>

            <div className='quote-cube'>
                <div className='cubespin'>
                    <div className='face1 face'>
                        <p>
                            'We will have eternity to celebrate the victories but only few hours before sunset to win them'
                            <br/>
                            <br/>
                            <span className='quoter'>~ Amy Carmichael</span>
                        </p>
                    </div>

                    <div className='face2 face'>
                        <p>
                            'Self-education is, I believe, the only kind of education there is.'
                            <br/>
                            <br/>
                            <span className='quoter'>~ Isaac Asimov</span>
                        </p>
                    </div>

                    <div className='face3 face'>
                        <p>
                            'Life takes a bit of time and a lot of relationship'
                            <br/>
                            <br/>
                            <span className='quoter'>~ William Paul Young</span>
                        </p>
                    </div>

                    <div className='face4 face'>
                        <p>
                            'It\'s probably my job to tell you life isn\'t fair, but
                             I figure you already know that. So instead, I\'ll tell you 
                             that hope is precious, and you\'re right not to give up'
                            <br/>
                            <br/>
                            <span className='quoter'>~ C.J. Redwine</span>
                        </p>
                    </div>

                    <div className='face5 face'>
                        <p >
                            'For the things we have to learn before we can do them, we learn by doing them.'
                            <br/>
                            <br/>
                            <span className='quoter'>~ Aristotle</span>
                        </p>
                    </div>

                    <div className='face6 face'>
                        <p>
                            'Let every man be swift to hear, slow to speak, slow to wrath.'
                            <br/>
                            <br/>
                            <span className='quoter'>~ James of the Bible</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact