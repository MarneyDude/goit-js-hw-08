const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// input.addEventListener("input", (event) => {
//    let name = event.target.value.trim();
//   let NameNormalize = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   if (NameNormalize === "") {
//     return (output.textContent = "Anonymous");
//   }

//   return (output.textContent = `${NameNormalize}`);
// });
//------------------------------------------------------------------------
input.addEventListener("input", (event) => {
  let name = event.target.value.trim();

  output.textContent = name === "" ? "Anonymous" : name;
});

// -------------------------------------------------------------------------
// input.addEventListener("input", (event) => {
//   let name = event.target.value.trim();

//   let NameNormalize = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

//   output.textContent = name === "" ? "Anonymous" : NameNormalize;
// });
