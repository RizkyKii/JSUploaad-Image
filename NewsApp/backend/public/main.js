const select = (selector) => document.querySelector(selector);

const form = select('.form');
const message = select('.message');

const displayMessage = (text, color) => {
    message.style.visibility = 'visible';
    message.style.backgroundColor = color;
    message.innerText = text;
    setTimeout(() => {
        message.style.visibility = 'hidden';
    }, 3000);
}

const validateForm = () => {
    const title = select('#title').value.trim();
    const content = select('#content').value.trim();
    const thumbnail = select('#thumbnail').value;
    const category = select('#category').value;

    const exceptedImageFiles = ['jpg', 'jpeg', 'png'];

    if(!title || !content || !thumbnail || category == '0'){
       return displayMessage('Field cannot be empty', 'red');
    }

    const extension = thumbnail.split('.').pop();
    if(exceptedImageFiles.includes(extension)){
        return displayMessage('Image file is not valid', 'red');
    }

    return true;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
   
    // Validate our form
   const valid = validateForm();

   if(valid){
    const formData = new FormData(form);
    await postData(formData);
   }
});

const postData = async (data) => {
  await fetch('/api/create', {
     method: 'POST',
     body: data, 
    });
};