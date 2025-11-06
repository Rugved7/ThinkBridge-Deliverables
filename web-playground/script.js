const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page refresh

  const formData = new FormData(form);

  console.log("Form Submitted Data:");
  for (const [key, value] of formData.entries()) {
    if (key !== "password" && key !== "cnfpassword") {
      console.log(`${key}: ${value}`);
    }
  }
  alert("Form submitted! Check the console for details.");
});
