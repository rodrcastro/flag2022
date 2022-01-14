import './contact.scss';

function Contact() {
  return (
    <form id="contact-form" action="" className="contact-form" novalidate>
      <p className="contact-form__title">Contact us</p>
      
      <label for="cf_email" className="contact-form__label">Your email</label>
      <input type="email" className="contact-form__input" name="cf_email" id="cf_email" required />

      <label for="cf_subject" className="contact-form__label">Subject</label>
      <input type="text" className="contact-form__input" name="cf_subject" id="cf_subject" required />

      <label for="cf_message" className="contact-form__label">Your message</label>
      <textarea maxlength="280" row="6" name="cf_message" id="cf_message" className="contact-form__textarea" required></textarea>
      <span className="contact-form__count"><strong>280</strong> characters left</span>

      <label for="cf_file" className="contact-form__label">Upload a file</label>
      <input type="file" name="cf_files[]" id="cf_file" multiple />

      <button className="button contact-form__submit" type="submit">Send message</button>
    </form>
    
  )
}

export default Contact;