import './contact.scss';

function Contact() {
  return (
    <form id="contact-form" action="" class="contact-form" novalidate>
      <p class="contact-form__title">Contact us</p>
      
      <label for="cf_email" class="contact-form__label">Your email</label>
      <input type="email" class="contact-form__input" name="cf_email" id="cf_email" required />

      <label for="cf_subject" class="contact-form__label">Subject</label>
      <input type="text" class="contact-form__input" name="cf_subject" id="cf_subject" required />

      <label for="cf_message" class="contact-form__label">Your message</label>
      <textarea maxlength="280" row="6" name="cf_message" id="cf_message" class="contact-form__textarea" required></textarea>
      <span class="contact-form__count"><strong>280</strong> characters left</span>

      <label for="cf_file" class="contact-form__label">Upload a file</label>
      <input type="file" name="cf_files[]" id="cf_file" multiple />

      <button class="button contact-form__submit" type="submit">Send message</button>
    </form>
    
  )
}

export default Contact;