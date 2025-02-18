const roles = [
    { text: "Gamedev", icon: "assets/gamepad.png" },
    { text: "Data Science", icon: "assets/datascience.png" }
];

let index = 0;
setInterval(() => {
    index = (index + 1) % roles.length;
    document.getElementById("role").textContent = roles[index].text;
}, 3000);