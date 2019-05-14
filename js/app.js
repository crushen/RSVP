document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrar');
    const input = form.querySelector('input');
    const mainDiv = document.querySelector('.main');
    const ul = document.getElementById('invitedList');
    const div = document.createElement('div');
    const filterLabel = document.createElement('label');
    const filterCheckBox = document.createElement('input');
    
    // creates filtering checkbox
    filterLabel.textContent = ("Hide those who haven't responded");
    filterCheckBox.type = 'checkbox';
    div.appendChild(filterLabel);
    div.appendChild(filterCheckBox);
    mainDiv.insertBefore(div, ul);
    
    // filters out those who haven't responded
    filterCheckBox.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      const list = ul.children;
      if (isChecked) {
        for (let i = 0; i < list.length; i++) {
          let li = list[i];
          if (li.className === 'responded') {
              li.style.display = '';
          } else {
              li.style.display = 'none';
          }
        }
      } else {
         for (let i = 0; i < list.length; i++) {
           let li = list[i];
           li.style.display = '';
         }
       }
    });
    
    // creates the list item
    function createLI(text) { 
      function createElement(elementName, property, value) {
        const element = document.createElement(elementName);
        element[property] = value;
        return element;
      }
      function appendToLI(elementName, property, value) {
        const element = createElement(elementName, property, value);
        li.appendChild(element);
        return element;
      }
      const li = document.createElement('li');
      appendToLI('span', 'textContent', text);
      appendToLI('label', 'textContent', 'Confirm')
        .appendChild(createElement('input', 'type', 'checkbox'));
      appendToLI('button', 'textContent', 'edit');
      appendToLI('button', 'textContent', 'remove');
      return li;
    }
    
    // takes name and turns it into list item
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = input.value;
      input.value = '';
      const li = createLI(name);
      ul.appendChild(li);
    });
    
    // changes class when checkbox is checked 
    ul.addEventListener('change', (e) => {
      const checkbox = e.target;
      const checked = checkbox.checked;
      let label = checkbox.parentNode.childNodes[0];
      const listItem = checkbox.parentNode.parentNode;
      if (checked === true) {
        listItem.className = 'responded';
        label.nodeValue = 'Confirmed';
      } else {
        listItem.className = '';
        label.nodeValue = 'Confirm';
      }
    });
    
    // click handler for buttons on list item
    ul.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        const action = button.textContent;
        const nameAction = {
          remove: () => {
            ul.removeChild(li);
          },
          edit: () => {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
          },
          save: () => {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';
          }
        };
        // select and run action in button's name
        nameAction[action]();
      }
    });
});
  
  
  
  
  
  