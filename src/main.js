import "./style.css";

let data;
const option = document.getElementById("option");
const gallery = document.getElementById("gallery");
const button = document.getElementById("button");
const urlHead = "/src/assets/langdiem2025";

async function getData() {
  const url = "/data.json";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
data = await getData();
console.log(data);
function renderOption(data) {
  let html = "";
  function optionHtml(name, img, alt) {
    return `<div class="gradient-ultra gradient-smooth duration-300 ease-in-out cursor-pointer flex items-center gap-2 p-3 rounded-lg">
          <img
            class="w-20 h-20 rounded-full"
            src=${img}
            alt=${alt}
          />
          <h2 class="text-lg">${name}</h2>
        </div>`;
  }
  for (let i = 0; i < data.length; i++) {
    html += optionHtml(data[i].name, data[i].avatar, data[i].alt);
  }
  option.innerHTML = html;
}
function imageExists(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}
function renderImage(e) {
  // Hide option and show gallery and button
  option.classList.add("hidden");
  button.classList.remove("hidden");
  gallery.classList.remove("hidden");
  const card = e.target.closest(".gradient-ultra");
  if (!card || !option.contains(card)) return;
  const nameChosen = card.querySelector("img").alt;
  if (!nameChosen) return;
  console.log(nameChosen);

  let i = 0;
  let html = "";

  async function loadImages() {
    let i = 0;
    let html = "";

    while (true) {
      const imgUrl = `${urlHead}/${nameChosen}/${nameChosen}${i}.png`;

      const exists = await imageExists(imgUrl); // ✅ hợp lệ

      if (!exists) break;

      html += `
      <div class="mb-4 w-full">
        <img src="${imgUrl}" alt="" />
      </div>
    `;

      i++;
    }

    gallery.innerHTML = html;
  }
  loadImages();
}
renderOption(data);
option.addEventListener("click", renderImage);
button.addEventListener("click", () => {
  option.classList.remove("hidden");
  button.classList.add("hidden");
  gallery.classList.add("hidden");
});
