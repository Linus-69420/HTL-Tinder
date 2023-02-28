const form = document.querySelector('#register-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
  const password = (form.elements.namedItem('password') as HTMLInputElement).value;
  const passwordConfirm = (form.elements.namedItem('password-confirm') as HTMLInputElement).value;

  // Prüfen Sie, ob das Passwort mindestens 8 Zeichen lang ist
  if (password.length < 8) {
    alert('Das Passwort muss mindestens 8 Zeichen lang sein.');
    return;
  }

  // Prüfen Sie, ob das Passwort und die Bestätigung übereinstimmen
  if (password !== passwordConfirm) {
    alert('Die Passwörter stimmen nicht überein.');
    return;
  }

  // Führen Sie hier den REST-API-Aufruf zum Registrieren durch
  // ...

  const passwordField = form.elements.namedItem('password') as HTMLInputElement;
  const passwordConfirmField = form.elements.namedItem('password-confirm') as HTMLInputElement;

    passwordField.addEventListener('input', () => {
    if (passwordField.value.length < 8) {
        passwordField.classList.add('error');
        passwordField.nextElementSibling.textContent = 'Das Passwort muss mindestens 8 Zeichen lang sein.';
    } else {
        passwordField.classList.remove('error');
        passwordField.nextElementSibling.textContent = '';
    }
    });

    passwordConfirmField.addEventListener('input', () => {
    if (passwordField.value !== passwordConfirmField.value) {
        passwordConfirmField.classList.add('error');
        passwordConfirmField.nextElementSibling.textContent = 'Die Passwörter stimmen nicht überein.';
    } else {
        passwordConfirmField.classList.remove('error');
        passwordConfirmField.nextElementSibling.textContent = '';
    }
});
});
