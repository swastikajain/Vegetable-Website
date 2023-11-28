const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearFormMessage();
  const isValid = validateInputs();

  if (isValid) {
    const formData = {
      username: username.value.trim(),
      password: password.value.trim(),
    };

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        displayFormMessage("success", data.message);
        // You can redirect to the dashboard or any other page here
      } else {
        // Login failed
        displayFormMessage("error", data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      displayFormMessage(
        "error",
        "An error occurred while submitting the form."
      );
    }
  }
});

const setError = (element, message) => {
  const errorDisplay = element.parentElement.querySelector(".error");
  errorDisplay.innerText = message;
  element.classList.add("error-border");
};

const clearError = (element) => {
  const errorDisplay = element.parentElement.querySelector(".error");
  errorDisplay.innerText = "";
  element.classList.remove("error-border");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  clearError(username);
  clearError(password);

  let isValid = true;

  if (usernameValue === "") {
    setError(username, "Username is required");
    isValid = false;
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    isValid = false;
  }

  return isValid;
};

const displayFormMessage = (type, message) => {
  formMessage.innerText = message;
  formMessage.classList.add(type);
};

const clearFormMessage = () => {
  formMessage.innerText = "";
  formMessage.classList.remove("success", "error");
};
