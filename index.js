/*Deliverables
A user can:
- View incomplete todos
- When the "Show completed todos" box is checked, view completed todos as well
- Enter a new todo, which will initially show as incomplete
- Click a todo to toggle its completion

Instructions
- Start this project from scratch, write whatever HTML, CSS & JS you need
- Create a state object
- Create action functions that update state
- Create render functions that read from state



Tips
- Try starting with state. Create the state for the todos, then a function to toggle a todo's completed state, a function to add a new todo, etc.
- You can test these functions before you even render anything on the page, just by calling the functions in your js file.*/








/*<body>
    <main>
      <section>
        <h2 class="title">OPTIONS</h2>
        <label>
          Show completed
          <input type="checkbox" checked />
        </label>
      </section>

      <section>
        <h2 class="title">ADD ITEM</h2>
        <form class="add-item">
          <input
            class="text-input"
            type="text"
            name="text"
            required
            minlength="3"
          />
          <button type="submit">Add</button>
        </form>
      </section>

      <section>
        <h2 class="title">TODO</h2>
        <ul class="todo-list"></ul>
      </section>

      <section>
        <h2 class="title">COMPLETED</h2>
        <ul class="completed-list"></ul>
      </section>

    </main>
  </body>*/
  let state = {
    todos : [
        {todo: 'Wake up', completed : true},
        {todo:'Eat', completed : false},
        {todo: 'Study', completed: true },
        
    ]
    /*dones : [
      {done: 'brush teeth'},
    ],*/
  }
  
  let showcompleted = false

  function render() {
    document.body.textContent = ""

    let mainEl = document.createElement("main")

    let firstSection = document.createElement('section')
    let firstSectionH2 = document.createElement('h2')
    firstSectionH2.className = `title`
    firstSectionH2.textContent = 'Options'

    let firstSectionLabel = document.createElement('label')
    let firstSectionLabelInput = document.createElement('input')
    firstSectionLabelInput.type = 'checkbox'
    firstSectionLabelInput.checked = false
    firstSectionLabel.append('Show Completed' , firstSectionLabelInput )
    for (let item of state.todos) {
      firstSectionLabelInput.addEventListener('click', function () {
      
        render()
    })
    }
    

    firstSection.append(firstSectionH2 , firstSectionLabel)


    let secondSection = document.createElement('section')
    let secondSectionH2 = document.createElement('h2')
    secondSectionH2.className = `title`
    secondSectionH2.textContent = 'ADD ITEM'

    let secondSectionForm = document.createElement('form')
    secondSectionForm.className = 'add-item'

    let secondSectionFormItem = document.createElement('input')
    secondSectionFormItem.className = 'text-input'
    secondSectionFormItem.type = 'text'
    secondSectionFormItem.name = 'name'
    //secondSectionFormItem.setAttribute('required', '')
    secondSectionFormItem.minLength = 3

    let secondSectionFormButton = document.createElement('button')
    secondSectionFormButton.type = 'submit'
    secondSectionFormButton.textContent = 'Add'
    
    
    secondSectionForm.addEventListener("submit" , function (event) {
        event.preventDefault()
        let formTextInput = {todo: secondSectionFormItem.value , completed: false}
        state.todos.push(formTextInput)
        render()
    })

    secondSectionFormButton.addEventListener('click', function () {
      let formTextInput = {todo: secondSectionFormItem.value , completed: false}
        state.todos.push(formTextInput)
        render()
    })

    secondSectionForm.append(secondSectionFormItem , secondSectionFormButton)

    secondSection.append(secondSectionH2 , secondSectionForm)


    let thirdSection = document.createElement('section')
    let thirdSectionH2 = document.createElement("h2")
    thirdSectionH2.className = 'title'
    thirdSectionH2.textContent = 'TODO'

    let thirdSectionUl = document.createElement('ul')
    thirdSectionUl.className = 'todo-list'

    for (let iterator of state.todos) {
        let todoel = document.createElement('li')
        todoel.className = 'todo-li'
       
        
        //let firstSectionLabelInput = document.createElement('input')
        //firstSectionLabelInput.type = 'checkbox'

        let thirdSectionUlInput = document.createElement('input')
        thirdSectionUlInput.type = 'checkbox'
        thirdSectionUlInput.className = 'todo-checkbox'
        thirdSectionUlInput.checked = false
        

        thirdSectionUlInput.addEventListener('change', function () {

          iterator.completed = true
          
          /*for (let i = 0; i <= state.todos.length; i++) {
            if (iterator.completed) {
              state.todos.splice(i , 0)
            }
          }*/
          
          render()
          
        })
        

        let thirdSectionUlButton = document.createElement('button')
        thirdSectionUlButton.textContent = 'Delete'
        thirdSectionUlButton.type = 'submit'

        thirdSectionUlButton.addEventListener('click', function () {
          
              state.todos.splice(iterator , 1)
              render()
            
        })
        
        
         if (!iterator.completed) {
          todoel.textContent = iterator.todo
          todoel.prepend(thirdSectionUlInput)
          todoel.appendChild(thirdSectionUlButton)
        }
        thirdSectionUl.appendChild(todoel)
        
    }

   

    //let todoCheckbox = document.querySelector('.todo-checkbox')
    //todoCheckbox.addEventListener('change', function (event) {
      
      
    //})
    
    
    thirdSection.append(thirdSectionH2, thirdSectionUl)

    let fourthSection = document.createElement('section')
    let fourthSectionH2 = document.createElement("h2")
    fourthSectionH2.className = 'title'
    fourthSectionH2.textContent = 'Completed'

    let fourthSectionUl = document.createElement('ul')
    fourthSectionUl.className = "completed-list"
    for (let element of state.todos) {
      let fourthSectionUlLi = document.createElement('li')
      fourthSectionUlLi.className = 'todo-li'
      

      
      let fourthSectionUlInput = document.createElement('input')
        fourthSectionUlInput.type = 'checkbox'
        fourthSectionUlInput.className = 'todo-checkbox'
        fourthSectionUlInput.checked = true
        

        fourthSectionUlInput.addEventListener('change', function () {
          element.completed = false
         
          render()
          
        })
 
      let fourthSectionUlButton = document.createElement('button')
        fourthSectionUlButton.textContent = 'Delete'
      fourthSectionUlButton.type = 'submit'

      fourthSectionUlButton.addEventListener('click' , function () {
        state.todos.splice(element , 1)
        render()
      })
      
       if (element.completed) {
        fourthSectionUlLi.textContent = element.todo
        fourthSectionUlLi.appendChild(fourthSectionUlButton)
        fourthSectionUlLi.prepend(fourthSectionUlInput)
        }

        fourthSectionUl.appendChild(fourthSectionUlLi)
       
    }

    fourthSection.append(fourthSectionH2 , fourthSectionUl)

    mainEl.append(firstSection, secondSection, thirdSection, fourthSection)

    document.querySelector('.body').append(mainEl)

  }

  render()