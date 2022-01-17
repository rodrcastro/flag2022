import './contact.scss';
import { useState } from 'react';

function Contact() {
  const max = 280;
  const [charactersLeft, setCharactersLeft] = useState(max);
  const [successMessage, setSuccessMessage] = useState('');

  const handleKeyUp = (event) => {
    setCharactersLeft(max - event.target.value.length)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const info = {
      email: event.target.cf_email.value,
      subject: event.target.cf_subject.value,
      message: event.target.cf_message.value,
    } 
    
    const response = await fetch('https://run.mocky.io/v3/316b41ae-ca10-42bb-8da2-3f7e66fb8bb8')
    const result = await response.json()

    setSuccessMessage(result.message)
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form" action="" className="contact-form" noValidate>
      <p className="contact-form__title">Contact us</p>
      
      <label htmlFor="cf_email" className="contact-form__label">Your email</label>
      <input type="email" className="contact-form__input" name="cf_email" id="cf_email" required />

      <label htmlFor="cf_subject" className="contact-form__label">Subject</label>
      <input type="text" className="contact-form__input" name="cf_subject" id="cf_subject" required />

      <label htmlFor="cf_message" className="contact-form__label">Your message</label>
      <textarea maxLength={max} row="6" name="cf_message" id="cf_message" className="contact-form__textarea" onKeyUp={handleKeyUp} required></textarea>
      <span className="contact-form__count"><strong>{charactersLeft}</strong> characters left</span>

      <label htmlFor="cf_file" className="contact-form__label">Upload a file</label>
      <input type="file" name="cf_files[]" id="cf_file" multiple />

      <button className="button contact-form__submit" type="submit">Send message</button>

      {successMessage && <p className='contact-form__success'>Informação submetida com sucesso</p>}
    </form>
    
  )
}

//TODO: fazer validação do form antes de enviar
//TODO: Mudar informação da mensagem e estilo se tiver erro

export default Contact;