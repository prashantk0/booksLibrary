let deleteId = 0;
const SubmitBtn = document.getElementById('addBtn');
let tableList = document.getElementById('table');
const success = document.querySelector('.successContainer');
const sucElement = document.getElementById('message');
const titleInput = document.getElementById('titleName');
const authorInput = document.getElementById('authorName');
const idInput = document.getElementById('idName');
const backdrop = document.getElementById('backdrop');
const confirmContainer = document.getElementById('confirmContainer');
const extraTitle = document.getElementById('extraTitle');
const extraAuthor = document.getElementById('extraAuthor');
const extraId = document.getElementById('extraId');
const closeButton = document.getElementById('close');
const addButton = document.getElementById('add');
const messageContainer = document.getElementById('message');

SubmitBtn.addEventListener('click', ()=>{
  if( titleInput.value.trim() && authorInput.value.trim() && idInput.value.trim() ) {
    const detailTitle = document.createElement('p');
    detailTitle.innerHTML = `${titleName.value}`;
    const detailAuthor = document.createElement('p');
    detailAuthor.innerHTML = `${authorName.value}`;
    const detailId = document.createElement('p');
    detailId.innerHTML = `${idName.value}`;
    extraTitle.append(detailTitle);
    extraAuthor.append(detailAuthor);
    extraId.append(detailId);
    openBackdrop();
    } else {
      ErrorMessage();
    }  
})


const delete_func = (e)=>{
    const deleteId = document.getElementById(`delete${e}`);
    deleteId.parentElement.parentElement.remove();
    
    message.innerHTML = 'Your Book has been Successfully Deleted!';
    success.style.transform = 'translate(0px,0px)';
    setTimeout(deleteSuccess, 2500);
}

function deleteSuccess(){
    success.style.transform = 'translate(0px,-50px)';
    success.style.backgroundColor = 'rgb(104, 175, 33)';
}

function closeBackdrop(){
  backdrop.style.display = 'none';
  confirmContainer.style.display = 'none';
  clearInputs();
  clearBookDetails();
}

function openBackdrop(){
  backdrop.style.display = 'block';
  confirmContainer.style.display = 'block';
  closeButton.addEventListener('click', closeBackdrop);
  addButton.addEventListener('click', addBookIntoTable);
}

function addBookIntoTable(){
  const row = document.createElement('tr');
    row.innerHTML = `<tr>
    <td>${titleInput.value}</td>
    <td>${authorInput.value}</td>
    <td>${idInput.value}</td>
    </tr>
    <td><a href='#' onclick="delete_func(${deleteId})" class='btn_delete' id='delete${deleteId}''> x </a></td>` 
  deleteId++;
  tableList.append(row);
  successMessage();
  closeBackdrop();
  clearBookDetails();
  
}

function successMessage(){
    messageContainer.lastChild.remove();
    const messageDetail = document.createElement('p');
    
    messageDetail.innerHTML = 'Your Book has been Successfully Added!';
    messageContainer.append(messageDetail);
    success.style.transform = 'translate(0px,0px)';
    setTimeout(deleteSuccess, 2500);
}

function ErrorMessage(){
    messageContainer.lastChild.remove();
    success.style.backgroundColor = 'red';
    message.innerHTML = 'ERROR! Please fill all the details';
    success.style.transform = 'translate(0px,0px)';
    setTimeout(deleteSuccess, 2500);
}

function clearInputs(){
  titleInput.value = "";
  authorInput.value = "";
  idInput.value = "";
}

function clearBookDetails(){
    extraTitle.lastChild.remove();
    extraAuthor.lastChild.remove();
    extraId.lastChild.remove();
    
}



