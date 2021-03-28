const data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
  }, {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54
  }, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
  }
];



const drawTable = (tableElement) => {
  tableElement.innerHTML = "";

  const headerRow = createRow('First Name', 'Last Name', 'Age', 'header-row');
  tableElement.appendChild(headerRow);

  data.forEach(user => {
      const row = createRow(user.firstName, user.lastName, user.age, 'row');
      tableElement.appendChild(row);
    });
};

const createRow = (firstname, lastname, age, rowclass) => {
  const rowElement = document.createElement('div');
  rowElement.className = rowclass;
  
  const firstNameCell = createCell(firstname);
  rowElement.appendChild(firstNameCell);

  const lastNameCell = createCell(lastname);
  rowElement.appendChild(lastNameCell);

  const ageCell = createCell(age);
  rowElement.appendChild(ageCell);

  return rowElement;
};

const createCell = (value) => {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.innerText = value;
  return cell;
};

const addUser = () => {
  const firstName = document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const age = document.querySelector('#age');
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
  };
  data.push(user);
  drawTable(document.querySelector("#table"));
};

drawTable(document.querySelector("#table"));


const btnOpen = document.querySelector('#openAddUserModal');
const modalWindow = document.querySelector('#modalWindow');

btnOpen.addEventListener('click', () => {
  modalWindow.style.display = "block";
});

const btnAdd = document.querySelector('#addUser');

btnAdd.addEventListener('click', () => {
  addUser();
  modalWindow.style.display = "none";
});

const btnCancel = document.querySelector('#cancel');

btnCancel.addEventListener('click', () => {
  modalWindow.style.display = "none";
})