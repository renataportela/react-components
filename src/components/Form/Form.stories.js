import React, { useState } from 'react'

import { Checkbox, Form, Radio, TextField } from '~/components'

export default {
  title: 'Form',
}

export const form = () => {
  const [values, setValues] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: '',
    description: 'Disabled',
    radio: null,
    'checkbox[]': []
  })

  const handleChangeField = fieldName => value => {
    setValues({
      ...values,
      [fieldName]: value,
    })
  }

  const onSubmit = async values => {
    return await new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log('submitted', values)
        resolve()
      }, 2000)
    })
  }

  return (
    <Form 
      values={values}
      onChangeField={handleChangeField}
      onSubmit={onSubmit}
    >
      <Form.Fields justify="start">
        <Form.Field 
          label="First Name"
          inputField={<TextField name="firstName" />}
        />
        <Form.Field 
          label="Last Name"
          inputField={<TextField name="lastName" />}
          fill
        />
      </Form.Fields>
      
      <Form.Field 
        label="Email"
        inputField={
          <TextField name="email" type="email" placeholder="Email" />
        }
      />

      <Form.Field 
        label="Description"
        inputField={
          <TextField name="description" disabled />
        }
      />

      <Form.Field
        label="Radio"
        inputField={<Radio name="radio" optionValue="1" label="Option 1" />}
      />

      <Form.Field
        inputField={<Radio name="radio" optionValue="2" label="Option 2" />}
      />

      <Form.Field
        inputField={<Checkbox name="checkbox[]" optionValue="A" label="Option A" />}
      />

      <Form.Field
        inputField={<Checkbox name="checkbox[]" optionValue="B" label="Option B" />}
      />

      <Form.Field
        inputField={<Checkbox name="checkbox[]" optionValue="C" label="Option C" />}
      />

      <Form.Button label="Submit" />
    </Form>
  )
}