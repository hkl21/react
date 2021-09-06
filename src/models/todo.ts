// .ts instead of tsx becuase i am not creating jsx component
// Define how Todo looks like 
// can be type, interface, class either approch would work
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;