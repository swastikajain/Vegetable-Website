const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearFormMessage();
  const isValid = validateInputs();

  if (isValid) {
    const formData = {
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Signup successful
        displayFormMessage("success", data.message);
        form.reset(); // Reset the form after successful signup
      } else {
        // Signup failed
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

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  clearError(username);
  clearError(email);
  clearError(password);
  clearError(password2);

  let isValid = true;

  if (usernameValue === "") {
    setError(username, "Username is required");
    isValid = false;
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    isValid = false;
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    isValid = false;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
    isValid = false;
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
    isValid = false;
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords don't match");
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
