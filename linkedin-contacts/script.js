const state = {
  linkedinUser: [],
};

function getContacts() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then((response) => response.json())
    .then((jsonData) => {
      state.linkedinUser = jsonData;
      renderContacts();
    });
}

getContacts();

function renderContacts() {
  const main = document.querySelector("main");
  let count = 0;

  function headCount() {
    const header = document.querySelector("header");
    const newHeader = document.createElement("p");
    header.innerText = "";
    header.appendChild(newHeader);

    newHeader.innerText = count + " " + "pending invitation";
  }
  headCount();

  for (let contact of state.linkedinUser) {
    const card = document.createElement("section");
    card.setAttribute("class", "sectionstyle");
    main.appendChild(card);

    const backgroundImage = document.createElement("img");
    backgroundImage.src = contact.backgroundImage;
    card.appendChild(backgroundImage);
    backgroundImage.setAttribute("class", "backgroundImage");

    const pic = document.createElement("img");
    pic.setAttribute("class", "pic");
    pic.src = contact.picture;
    card.appendChild(pic);

    const profession = document.createElement("p");
    profession.innerText = contact.name.title;
    card.appendChild(profession);

    const firstName = document.createElement("p");
    firstName.innerText = contact.name.first;
    card.appendChild(firstName);

    const lastName = document.createElement("p");
    lastName.innerText = contact.name.last;
    card.appendChild(lastName);

    const title = document.createElement("p");
    title.innerText = contact.title;
    card.appendChild(title);

    const mutualConnect = document.createElement("p");
    mutualConnect.innerText =
      contact.mutualConnections + " " + "mutual connections";
    card.appendChild(mutualConnect);

    const btn = document.createElement("button");
    btn.innerText = "Connect";
    card.appendChild(btn);
    btn.addEventListener("click", function () {
      if (btn.innerText === "Connect") {
        btn.innerText = "Pending";
        count += 1;
      } else if (btn.innerText === "Pending") {
        btn.innerText = "Connect";
        count -= 1;
      }
      headCount();
    });
  }
}

/*
function getContacts() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=1")
    .then((response) => response.json())
    .then((jsonData) => {
      state.linkedinUser = jsonData[0];
    });
}

const removeBtn = document.createElement("button");
removeBtn.innerHTML = "&#10006;";
bgImgSection.appendChild(removeBtn);
connectBtn.addEventListener("click", removeContent);

function removeContent() {
  const indexRemove = state.linkedinUser.indexOf(contact);
  if (indexRemove != -1) {
    state.linkedinUser.splice(indexRemove, 1);
    getContacts().then((newContact) => {
      state.linkedinUser.push(newContact);
      renderContacts();
    });
  }
}

/*
[{"name":{"title":"Mrs","first":"Rosalyn","last":"Sims"},
"title":"Agile Coach",
"picture":"https://randomuser.me/api/portraits/women/31.jpg","mutualConnections":6,
"backgroundImage":"https://source.unsplash.com/random/300×300"%7D]
*/
