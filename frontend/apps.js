const URLStates = "http://localhost:3000/state";
const URLCounties = "http://localhost:3000/county";

fetch (URLStates)
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
    fetch(`${URLCounties}/${event.target.value}`)
    .then((r) => r.json())
    .then(console.log);
  });
});