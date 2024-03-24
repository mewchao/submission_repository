import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {
    const {course} = props
    return (
        <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        </div>
    )
}

export default Course