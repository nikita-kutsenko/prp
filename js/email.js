/**
 * Submit form to send email
 */
function submitForm() {
  var firstname = document.getElementById("form_firstname").value;
  var lastname = document.getElementById("form_lastname").value;
  var email = document.getElementById("form_email").value;
  var phone = document.getElementById("form_phone").value;
  var message = document.getElementById("form_message").value;
  const subject = "PRP - Форма связи";

  window.open(
    "mailto:info.prpartners@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=Имя Фамилия:%20" +
      encodeURIComponent(firstname) +
      "%20" +
      encodeURIComponent(lastname) +
      "%0a%0aEmail:%20" +
      encodeURIComponent(email) +
      "%0a%0aНомер телефона:%20" +
      encodeURIComponent(phone) +
      "%0a%0a" +
      encodeURIComponent(message)
  );
}
