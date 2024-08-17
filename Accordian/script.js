
const section = document.getElementById("section");
const item = document.getElementById("items");

const buttons = document.getElementById("submit");

//  creating whole section
buttons.addEventListener("click",(event)=>{
    event.preventDefault();

    let input = document.getElementById("list");

    if(input.value === '') {
        return window.alert("Please give the input first");
    }
    createNewSection(input.value);
    input.value = "";
});

// submitting content to the given accordian
const textSubmit = document.getElementById("textSubmit");
textSubmit.addEventListener('click',(event)=>{
    event.preventDefault();


    const textarea1 = document.getElementById('myTextarea');
    let content1 = textarea1.value;

    if(content1 === ""){
        return window.alert("Please provide the content");
    }

    const textarea2 = document.getElementById('content-items');
    let content2 = textarea2.textContent;

    
    let contents =  content2 +" "+ content1;
    textarea2.textContent = contents;

    textarea1.value = "";
});

// make the content visible
const buttonVis = document.querySelectorAll(".btn-open");
const elements = document.querySelectorAll(".content");

buttonVis.forEach((butt) => {
    butt.addEventListener('click',(event)=>{

        const edit_button = event.target.parentElement.children[2];
        if(butt.textContent == "Open"){
            butt.textContent = "Close";
            edit_button.classList.remove('content');
        }else{
            butt.textContent = "Open";
            edit_button.classList.add('content');
        }
        const elements = butt.parentElement.parentElement.parentElement.children[1]
        elements.classList.toggle('content');

    });
})




function createNewSection(name){
    const container = document.createElement('div');  // 1st root 
    container.setAttribute('id','section');

    const ele1 =  document.createElement('div');  // 1st child 
    ele1.setAttribute('id','items');

    const buttonDiv =  document.createElement('div');  // 2st child 
    buttonDiv.setAttribute('class','button-group');
    
    const heading = document.createElement('h2');
    heading.setAttribute('class','tittle');
    heading.textContent = name;

    const btn_open = document.createElement('button'); // for open-close button
    btn_open.setAttribute('class','btn-open');
    btn_open.textContent = "Open";

    const btn_delete = document.createElement('button');  // for deleting the given accordian
    btn_delete.setAttribute('class','btn-delete');
    btn_delete.textContent = "Delete";

    const btn_edit = document.createElement('button');  // for deleting the given accordian
    btn_edit.setAttribute('class','btn-edit');
    btn_edit.setAttribute('class','content');
    btn_edit.textContent = "Edit";

    buttonDiv.appendChild(btn_open);
    buttonDiv.appendChild(btn_delete);
    buttonDiv.appendChild(btn_edit);

    ele1.appendChild(heading);
    ele1.appendChild(buttonDiv);
    container.appendChild(ele1);

    
    //  making a input paragraph
    
    const ele2 =  document.createElement('div');
    ele2.setAttribute('class','content');
    
    const paragraph = document.createElement('p');
    paragraph.setAttribute('id','content-items');
    
    const TextArea = document.createElement('textarea');
    TextArea.setAttribute('id','myTextarea');
    TextArea.setAttribute('placeholder','Enter your content here.......');
    
    
    const subBtn = document.createElement('button');  // button to given content to the given accordian
    subBtn.setAttribute('id','textSubmit'); 
    subBtn.textContent = "Submit";
    
    ele2.appendChild(paragraph);
    ele2.appendChild(TextArea);
    ele2.appendChild(subBtn);
    container.appendChild(ele2);
    
    const par = document.getElementById("parent");
    par.appendChild(container);
    
    // making the paragraph editable

    btn_edit.addEventListener('click',(event)=>{
        if(btn_edit.textContent === "Edit"){
            btn_edit.textContent = "Save"
            paragraph.setAttribute('contenteditable','true');
        }else{
            btn_edit.textContent = "Edit";
            paragraph.removeAttribute('contenteditable');
        }
    })
    // delete the specific accordian
    
    btn_delete.addEventListener('click',(event)=>{
        const toDeleteItem = event.target.parentElement.parentElement.parentElement;
        toDeleteItem.remove();
    });
    
    // toggle the accordian
    btn_open.addEventListener('click', (event) => {
        // console.log("button clicked open");
        const edit_button = event.target.parentElement.children[2];
        if (btn_open.textContent == "Open") {
            btn_open.textContent = "Close";
            edit_button.classList.remove('content');
            
        } else {
            btn_open.textContent = "Open";
            edit_button.classList.add('content');
        }
        
        ele2.classList.toggle('content');
    });

    // accessing the content submission button

    subBtn.addEventListener('click',(event)=>{
        event.preventDefault();

        
        let content1 = TextArea.value;

        if(content1 === ""){
            return window.alert("Please provide the content");
        }

        let content2 = paragraph.textContent;

        
        let contents =  content2 +" "+ content1;
        paragraph.textContent = contents;

        TextArea.value = "";
    });
}

