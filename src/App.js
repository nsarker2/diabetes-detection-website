import Header from "./components/Header"
import Survey from "./components/Survey"
import AddNewLog from "./components/AddNewLog"
import * as React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  const [survey, setSurvey] = useState(
    {
        id : 1,
        text : 'What is your full legal name?',
        name: "name",
        type: "text",
        title: "Please enter your name:",
        isRequired: true,
    },
    {
        id : 2,
        text : 'What is your age?',
        age: "age",
        type: "text",
        title: "Please enter your age:",
        isRequired: true,
    },
    {
        id : 3,
        text : 'What is your gender?',
        gender: "gender",
        type: "text",
        title: "Please enter your gender:",
        isRequired: true,
    },
    {
        id : 4,
        text : 'What is the level of glucose recorded on the testing strip?',
        level: "level",
        type: "text",
        title: "Please enter the level of glucose:",
        isRequired: true,
    },
    {
        id : 5,
        text : 'What is your weight?',
        weight: "weight",
        type: "text",
        title: "Please enter your weight:",
        isRequired: true,
    },
    {
        id : 6,
        label : 'Has there ever been a case/multiple cases of diabetes in your family?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 7,
        label: 'Has a 12-hour fasting period been completed before taking the strip test?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 8,
        label : 'Have you experienced excessive urination (polyuria)?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    }, 
    {
        id : 9,
        label : 'Have you experienced excessive thirst/excess drinking (polydipsia)?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 10,
        label : 'Have you experienced extreme weight loss?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 11,
        label : 'Have you experienced weakness or fatigue?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 12,
        label : 'Have you experienced an episode of excessive/extreme hunger?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 13,
        label : 'Have you had a yeast infection (genital thrush)?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 14,
        label : 'Have you experienced an episode of blurred vision (visual blurring)?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 15,
        label : 'Have you experienced itching or irritability?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 16,
        label : 'Have you experienced delayed hearing?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 17,
        label : 'Have you experienced any weakening of a muscle or a group of muscles that have resulted in movements that are weaker than normal (partial paresis)?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 18,
        label : 'Have you experienced muscle stiffness?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    },
    {
        id : 19,
        label : 'Have you experienced hair loss/alopecia?',
        type: "text",
        title: "Please answer the question",
        isRequired: true
    }
)

return (
    <Router>
    <div className='container'>
      <Header />  
      <Survey survey={survey} />
      <Route path='/addNewLog' element={<addNewLog />} />
    </div>
    </Router>
  )
}

export default App;
