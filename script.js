const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = document.querySelector("#id-input-name").value;
  const newPlayer = {
    name: nameValue,
  };
  const dataNamePlayer =
    JSON.parse(localStorage.getItem("Players")) ?? [];

  let isDulicate = false;
  dataNamePlayer.forEach((element) => {
    if (element.name === nameValue) {
      isDulicate = true;
    }
  });
  if (isDulicate) {
    alert("Trùng tên, nhập lại tên khác");
    return;
  }
  dataNamePlayer.push(newPlayer);
  localStorage.setItem("Players", JSON.stringify(dataNamePlayer));
});
