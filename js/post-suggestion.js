const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// same as above but tydier
form.addEventListener("submit", userSubmitted);

function userSubmitted(event) {
  event.preventDefault();
  console.log(form.elements.title.value);
  console.log(form.elements.username.value);
  console.log(form.elements.content.value);

  const payload = {
    title: form.elements.title.value,
    username: form.elements.username.value,
    content: form.elements.content.value,
  };
  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea2s21-6ee9.restdb.io/rest/posts", {
    method: "POST",
    headers: {
      "x-apikey": "602e2bac5ad3610fb5bb629b",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = true;
      form.elements.title.value = "";
      form.elements.username.value = "";
      form.elements.content.value = "";
      document.querySelector("p.hidden").classList.remove("hidden");
    })
    .catch((err) => {
      console.error(err);
    });
}
