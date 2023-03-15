import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_wwtnp2g', form.current, 'PrZ7kEJQwuAOirfKf')
            .then((result) => {
                alert('message sent successfully...');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    };

    window.scrollTo(0, 0);
    
    return(

            <div class='container p-3 mt-3 shadow-sm p-3 mb-5 rounded backgrnd'>
            <div class='row'>

                <div class='col'>
                    <div class='map-container'>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.6003017560424!2d28.025405150519838!3d-26.0139075625005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95714f1efddc43%3A0xd91e7c33dc7e664!2sLogiChem%20Control%20(Pty)Ltd.!5e0!3m2!1sen!2sza!4v1656975328667!5m2!1sen!2sza" 
                        width="600" height="450" allowfullscreen="" loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" title='LogichemCo'>
                        </iframe>
                    </div>
                </div>

                <div class='col'>
                    <br/>
                    <form  ref={form} onSubmit={sendEmail}>
                        <div className="mb-3 pt-0">
                            <input type="text" name="user_name" placeholder="Your Name"
                                   className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            />
                        </div>
                        <div className="mb-3 pt-0">
                            <input type="email" name="user_email" placeholder="Your email address"
                                   className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            />
                        </div>
                        <div className="mb-3 pt-0">
                            <textarea name="message" placeholder="Your message"
                                      className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            ></textarea>
                        </div>
                        <br />
                        <div className="mb-3 pt-0">
                            <button className = "btn btn-primary" type="submit">Send Message</button>
                        </div>
                    </form>
                <br />
                <br />

                    <div>
                        <i class='bx bxs-envelope' ></i>Email: <a href='mailto:info@logichem.co.za' title='Email Link'>info@logichem.co.za</a><br/>
                        <i class='bx bxs-phone'></i>Telephone: 011 465 2718<br/>
                        <a href="https://www.linkedin.com/company/logichem-control-pty-ltd/" class="fa fa-linkedin"> </a>
                    </div>

                </div>
                <br />
                <br />
            </div>
        </div>
        
    );
};

export default Contact;