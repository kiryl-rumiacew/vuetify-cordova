
export default [
  {
    label: 'Name',
    name: 'name',
    value: null,
    placeholder: 'Enter name',
    validation: 'required',
    required: true,
    type: 'text'
  },
  {
    label: 'Email',
    name: 'email',
    value: null,
    placeholder: 'Enter email',
    validation: 'required|email',
    required: true,
    width: 50,
    type: 'text'
  },
  {
    label: 'Age',
    name: 'age',
    value: null,
    placeholder: 'Your age',
    validation: 'required',
    required: true,
    mask: '###',
    width: 50,
    type: 'number'
  },
  {
    label: 'Address',
    name: 'address',
    value: null,
    placeholder: 'Enter address',
    validation: 'required',
    required: true,
    multiLine: true,
    type: 'text'
  }
]
