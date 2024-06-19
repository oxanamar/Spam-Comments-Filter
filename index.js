const nameOutput = document.querySelector("#nameoutput");
const avatarOutput = document.querySelector("#avataroutput");
const commentOutput = document.querySelector("#commentoutput");
const dateOutput = document.querySelector("#date");
const button = document.querySelector("#button");

function inputInfo() {
  let name = document.querySelector("#name").value;
  let avatar = document.querySelector("#avatar").value;
  let comment = document.querySelector("#comment").value;

  let name1 = name.trim();
  let name2 = name1[0].toUpperCase();
  let name3 = name1.slice(1).toLowerCase();
  let name4 = name2 + name3;
  console.log(name4);

  let checkSpam = comment.replace(/viagra/gi, "***");
  let date = new Date();
  console.log(date);

  nameOutput.textContent = name4;
  avatarOutput.src = avatar;
  commentOutput.textContent = checkSpam;
  dateOutput.textContent = date;
}

button.addEventListener("click", inputInfo);
