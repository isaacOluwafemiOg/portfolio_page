import './index.scss'

const Contact = () => {
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
                    <form>
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

        </div>
    )
}

export default Contact