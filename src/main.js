import "./style.css";

let data;
const option = document.getElementById("option");
const gallery = document.getElementById("gallery");
const button = document.getElementById("button");
const imageShow = document.getElementById("image-show");

async function getData() {
  const url = "/diem2025funnymoment/data.json";
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
  const card = e.target.closest(".gradient-ultra");
  if (!card || !option.contains(card)) return;
  // Hide option and show gallery and button
  option.classList.add("hidden");
  button.classList.remove("hidden");
  gallery.classList.remove("hidden");
  const nameChosen = card.querySelector("img").alt;
  if (!nameChosen) return;
  console.log(nameChosen);

  let i = 0;
  let html = "";

  async function loadImages() {
    let i = 0;
    let imageArray;
    let html = "";
    const url = "/diem2025funnymoment/image.json";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const result = await res.json();
      imageArray = result[nameChosen];
    } catch (error) {
      console.error(error.message);
    }
    console.log(imageArray);
    for (let i = 0; i < imageArray.length; i++) {
      html += `
        <div class="mb-4 w-full cursor-pointer">
          <img src="${imageArray[i].url}" alt="" />
        </div>
      `;
    }

    gallery.innerHTML = html;
  }
  loadImages();
}
function handleClickedImage(e) {
  const img = e.target.closest("img");
  const imgShow = imageShow.querySelector("img");
  if (!img || !gallery.contains(img)) return;
  imageShow.classList.remove("hidden");
  imageShow.classList.add("flex");
  document.body.style.overflow = "hidden";
  imgShow.src = img.src;
}
function handleImageShow(e) {
  document.body.style.overflow = "";
  const imgShow = imageShow.querySelector("img");
  imgShow.src = "";
  imageShow.classList.remove("flex");
  imageShow.classList.add("hidden");
}
renderOption(data);
option.addEventListener("click", renderImage);
button.addEventListener("click", () => {
  option.classList.remove("hidden");
  button.classList.add("hidden");
  gallery.classList.add("hidden");
});
gallery.addEventListener("click", handleClickedImage);
imageShow.addEventListener("click", handleImageShow);
