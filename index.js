const nameOutput = document.querySelector("#nameoutput");
const avatarOutput = document.querySelector("#avataroutput");
const commentOutput = document.querySelector("#commentoutput");
const dateOutput = document.querySelector("#date");
const button = document.querySelector("#button");
const containerOutput = document.querySelector(".container_output");
const noCheck = document.querySelector("#no");
const checkboxes = document.querySelectorAll(".checkbox");

/*
checkboxes.forEach((element) => {
  console.log(element);

  element.addEventListener("change", function () {
    if (this.checked) {
      checkboxes.forEach((el) => {
        console.log(el);
        if (el !== this) {
          el.checked = false;
        }
      });
    }
  });
});
*/

noCheck.addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("name").value = "username";
    document.querySelector("#name").classList.add("hide");
    document.querySelector("#label-name").classList.add("hide");
  } else {
    document.querySelector("#name").classList.remove("hide");
    document.querySelector("#label-name").classList.remove("hide");
  }
});

// Get random avatar
let randomAvatars = [];
randomAvatars.push(
  '<img src="./img/1.jpg">',
  '<img src="./img/2.jpg">',
  '<img src="./img/3.jpg">',
  '<img src="./img/4.jpg">',
  '<img src="./img/5.jpg">'
);

function getRandomAvatar() {
  return randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
}

// Output function
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

  /*
  nameOutput.textContent = name4;
  avatarOutput.src = avatar;
  commentOutput.textContent = checkSpam;
  dateOutput.textContent = date;
  */

  let div = document.createElement("div");
  div.classList.add("container_output");
  containerOutput.before(div);

  let image = document.createElement("img");
  image.classList.add("image_avatar");
  image.alt = "image";
  image.style.width = "100px";
  image.style.height = "100px";
  let randomAvatar = randomAvatars[getRandomAvatar()];

  if (avatar.value == "") {
    image.src = randomAvatar;
  } else {
    image.src = avatar.value;
  }
  div.appendChild(image);

  let div2 = document.createElement("div");
  div.appendChild(div2);

  let div3 = document.createElement("div");
  div3.classList.add("name_output");
  div3.textContent = name4;
  div2.appendChild(div3);

  let div4 = document.createElement("div");
  div4.textContent = checkSpam;
  div2.appendChild(div4);

  let div5 = document.createElement("div");
  div5.textContent = date;
  div2.appendChild(div5);

  name.value = "";
  avatar.value = "";
  comment.value = "";
  noCheck.checked = false;
}

button.addEventListener("click", function () {
  inputInfo();
  getRandomAvatar();
});
