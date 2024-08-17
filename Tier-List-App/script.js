
let currentDraggedItem;

const tier_input = document.getElementById("tier");
const submit_btn = document.getElementById("btn");

const image_submit = document.getElementById("image-btn");
const image = document.getElementById("image");

const draggableItems = document.getElementsByClassName("image-list");
for(const i of draggableItems){
    setUpItemContainerForDrag(i);
}

// image url submit button
image_submit.addEventListener('click',(event) => {
    console.log("image started");
    event.preventDefault();
    const url = image.value;
    if(url === ''){
        alert("Please Enter Valid Url : ");
        return;
    }
    console.log(url.src);
    createImageList(url);
    image.value = '';
});

// for form submit button
submit_btn.addEventListener('click',(event) => {
    // console.log("button started");
    event.preventDefault();
    if(tier_input.value === ''){
        alert("Please Give Tier Name : ");
        return;
    }
    createTierList(tier_input.value);

    tier_input.value = '';
});

function createTierList(name){
    const tier = document.createElement('div');
    const heading = document.createElement('h1');
    const container = document.createElement('div');


    tier.classList.add('tier_list');
    heading.classList.add('items_title');
    heading.textContent = name;
    container.classList.add('tier-list-items');

    tier.appendChild(heading);
    tier.appendChild(container);

    const section = document.getElementById("tier-section");
    section.appendChild(tier);
}

function createImageList(url){
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-list');
    imageContainer.setAttribute('draggable','true');

    setUpItemContainerForDrag(imageContainer);

    const image = document.createElement('img');
    image.classList.add('image-item');
    image.src = url;

    const image_section = document.getElementById("image-section");
    imageContainer.appendChild(image);
    image_section.appendChild(imageContainer);
}

function setUpItemContainerForDrag(images){
    images.addEventListener("dragstart",(event)=>{
        console.log("Drag Started");
    })
}


