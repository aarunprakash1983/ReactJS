import React from 'react'
import Footer from './Footer'
import AddTodo from '../containersTodo/AddTodo'
import VisibleTodoList from '../containersTodo/VisibleTodoList'

const AppTodo = () => (
  <div>
    <Footer />
    <br></br>
    <AddTodo />
    <VisibleTodoList />
  
  </div>
)

export default AppTodo
