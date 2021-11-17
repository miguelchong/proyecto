const URL = "http://localhost:3000/state";

fetch (URL)
 .then((r) => r.json())
 .then((r) => {
   const select = document.getElementById("estado");

  r.forEach((e) => {
    const element = document.createElement("option");
    element.setAttribute("value", e.id);
    element.textContent = e.name;
    select.appendChild(element);
  });

  select.addEventListener("change", (event) => {
    console.log(event.target.value);
  });
});