import './contact-form.scss'

const messageField = document.querySelector('[name="cf_message"]');

function onSubmit(event) {
  event.preventDefault();

  let errors = 0;

  // Validação do email
  const emailField = document.querySelector('[name="cf_email"]');
  const emailPattern = /\S+@\S+\.\S+/;
  const isEmailValid = emailPattern.test(emailField.value);

  // Solução do Nuno
  //emailField.classList.toggle('error', !isEmailValid);
  //Mesma coisa pros subject e message
  //Com essa solução, não precisa da variável "errors", dá pra controlar a validação por ter a classe error em algum lugar do form

  //  if (document.querySelector('.contact-form .error')) {
  //  console.error('Form não validado');
  //} else {
  //  console.log('form validado');
  //}

 
  if (isEmailValid) {
    emailField.classList.remove('error');
  } else {
    emailField.classList.add('error');
    errors++;
  }
  

  // Validação do subject e message
  const subjectField = document.querySelector('[name="cf_subject"]');
  //const messageField = document.querySelector('[name="cf_message"]');

  if (subjectField.value.trim().length >= 3) {
    subjectField.classList.remove('error');
  } else {
    subjectField.classList.add('error');
    errors++;
  }

  if (messageField.value.trim().length >= 3) {
    messageField.classList.remove('error');
  } else {
    messageField.classList.add('error');
    errors++;
  }

  // Validação final
  if (errors) {
    console.error('Form não validado');
  } else {
    console.log('form validado');
    document.querySelector('.contact-form__submit').setAttribute('disabled', '');
    fetch('https://run.mocky.io/v3/316b41ae-ca10-42bb-8da2-3f7e66fb8bb8')
      .then(response => response.json())
      .then(data => {
        if (data.result === 'OK') {
          event.target.reset();
          document.querySelector('strong').innerHTML = 280;
          // Mostrar popup de sucesso
        }
      })
      .finally(() => {
        document.querySelector('.contact-form__submit').removeAttribute('disabled', '');
      })
  };
};

function onTyping() {
  const count = document.querySelector('strong');
  count.innerHTML = 280 - messageField.value.length;
}

// Ideal para forms uilizar IDs para buscá-los
messageField.addEventListener('keyup', onTyping);
document.querySelector('#contact-form').addEventListener('subtmit', onSubmit);