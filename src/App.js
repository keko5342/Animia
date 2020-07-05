/* src/App.js */
import React, { Component } from 'react'
import { API_URL } from './config'
import Loading from './Loading'
import Content from './Content'
import { Auth } from '@aws-amplify/auth'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

class App extends Component {

  // initialize
  state = {
    loading: true
  }

  // APIサーバの起動確認
  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          this.setState({ loading: false })
          console.log('server is wake up')
          test()
        }
      })
    async function test(){
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user.username)
      } catch (err) {
        console.log(err)
      }
    };
  }

  render () {
    return (
      <div style={styles.container}>
        {this.state.loading
          ? <Loading />
          : <div>
              <AmplifySignOut />
              <Content />
            </div>
        }
      </div>  
    )
  }
}

const styles = {
  /*
  phoneContainer: { width: 300, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
  */
}

/*
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import MediaQuery from "react-responsive"

// const initialState = { name: '', description: '' }
*/

  /*
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }
  */

      /*
      <MediaQuery query="(max-width: 767px)">
        <div style={styles.phoneContainer}>
          <h2>Amplify Todos</h2>
          <input
            onChange={event => setInput('name', event.target.value)}
            style={styles.input}
            value={formState.name} 
            placeholder="Name"
          />
          <input
            onChange={event => setInput('description', event.target.value)}
            style={styles.input}
            value={formState.description}
            placeholder="Description"
          />
          <button style={styles.button} onClick={addTodo}>Create Todo</button>
          {
            todos.map((todo, index) => (
              <div key={todo.id ? todo.id : index} style={styles.todo}>
                <p style={styles.todoName}>{todo.name}</p>
                <p style={styles.todoDescription}>{todo.description}</p>
              </div>
            ))
          }
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div style={styles.container}>
          <h2>Amplify Todos</h2>
          <input
            onChange={event => setInput('name', event.target.value)}
            style={styles.input}
            value={formState.name} 
            placeholder="Name"
          />
          <input
            onChange={event => setInput('description', event.target.value)}
            style={styles.input}
            value={formState.description}
            placeholder="Description"
          />
          <button style={styles.button} onClick={addTodo}>Create Todo</button>
          {
            todos.map((todo, index) => (
              <div key={todo.id ? todo.id : index} style={styles.todo}>
                <p style={styles.todoName}>{todo.name}</p>
                <p style={styles.todoDescription}>{todo.description}</p>
              </div>
            ))
          }
        </div>
      </MediaQuery>
      */

export default withAuthenticator(App)