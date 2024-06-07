import { useState } from 'react'
import './App.css'
import TaskForm from './components/taskForm'
import TasksList from './components/tasksList'
import {BrowserRouter} from "react-router-dom"
import {Routes, Route} from "react-router-dom"


function App() {

  return (
    <div className='bg-zinc-900 h-screen text-white'>
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes >
            <Route path = "/" element = {<TasksList/>}/>
            <Route path = "/create-task" element = {<TaskForm/>}/>
            <Route path = "edit-task/:id" element = {<TaskForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
        

    </div>
    
  )
}

export default App
