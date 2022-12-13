const e = document.getElementById("edit"), r = document.getElementById("edit");
const u = () => r.innerHTML = e.innerHTML.split(" ").map(w => `<b>${w.split("").slice(0,Math.ceil(w.length/2)).join("")}</b>${w.split("").slice(Math.ceil(w.length / 2),w.length).join("")} `).join(" ");
u();
e.addEventListener("input", u);
