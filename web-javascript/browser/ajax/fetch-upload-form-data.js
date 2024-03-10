async function upload(formData) {
  try {
    const response = await fetch("https://localhost:3000", {
        method: "PUT",
        body: formData,
  });
  const result = await response.json();
  console.log("Success", results);
  } catch (error) {
  console.error("Error:", error);
  }
}

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0])

upload(formData);