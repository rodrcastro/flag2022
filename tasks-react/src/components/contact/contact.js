import './contact.scss';
import { useState } from 'react';
import {isEmailValid as isEmail, isNotEmpty} from '../../helpers/form-validations';

function Contact() {
  const max = 280;
  const [charactersLeft, setCharactersLeft] = useState(max);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState('');
  const [isSubjectValid, setIsSubjectValid] = useState('');
  const [isMessageValid, setIsMessageValid] = useState('');
  const [status, setStatus] = useState('');

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

    const checkEmail = isEmail(info.email) ? '' : 'error';
    const checkSubject = isNotEmpty(info.subject) ? '' : 'error' ;
    const checkMessage = isNotEmpty(info.message) ? '' : 'error';

    setIsEmailValid(checkEmail);
    setIsSubjectValid(checkSubject);
    setIsMessageValid(checkMessage);

    if(checkEmail || checkSubject || checkMessage) {
      console.log('errors');
      setFeedbackMessage('❌ Preencha o formulário corretamente')
      setStatus('error')
    } else {
      const response = await fetch('https://run.mocky.io/v3/316b41ae-ca10-42bb-8da2-3f7e66fb8bb8')
      const result = await response.json()
      
      setFeedbackMessage(result.message)
      setStatus('success');
    }
  }

  return (
    
    <form data-status={status} onSubmit={handleSubmit} id="contact-form" action="" className="contact-form" noValidate>
      <p className="contact-form__title">Contact us</p>
    {status !== 'success' && (
      <>
        <label htmlFor="cf_email" className="contact-form__label">Your email</label>
        <input type="email" className={`contact-form__input ${isEmailValid}`} name="cf_email" id="cf_email" required />

        <label htmlFor="cf_subject" className="contact-form__label">Subject</label>
        <input type="text" className={`contact-form__input ${isSubjectValid}`} name="cf_subject" id="cf_subject" required />

        <label htmlFor="cf_message" className="contact-form__label">Your message</label>
        <textarea maxLength={max} row="6" name="cf_message" id="cf_message" className={`contact-form__textarea ${isMessageValid}`} onKeyUp={handleKeyUp} required></textarea>
        <span className="contact-form__count"><strong>{charactersLeft}</strong> characters left</span>

        <label htmlFor="cf_file" className="contact-form__label">Upload a file</label>
        <input type="file" name="cf_files[]" id="cf_file" multiple />

        <button className="button contact-form__submit" type="submit">Send message</button>
      </>
      )}

    {feedbackMessage && <p className='contact-form__feedback'>{feedbackMessage}</p>}
    </form>
    
  )
}

//DONE (IN CLASS): fazer validação do form antes de enviar
//DONE (IN CLASS): Mudar informação da mensagem e estilo se tiver erro

export default Contact;