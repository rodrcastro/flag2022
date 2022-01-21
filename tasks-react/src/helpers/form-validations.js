/* export const isEmailValid = (email) => {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
} */

// Validação do email
export const isEmailValid = email => /\S+@\S+\.\S+/.test(email);

// Validação se o campo do form não está vazio
export const isNotEmpty = field => field.length >=3;