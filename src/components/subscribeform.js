import React from 'react'

import styled from 'styled-components'

const SubmitButton = styled.button`
  background-color: #F5BE38;
  border: 0;
  font-weight: bold;
  padding: 0.5rem;
`

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      answer: "",
      answerCode: 0,
    }
  }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      email: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.email)
    const data = {
      listIds: ['7'],
      email: this.state.email,
      updateEnabled: true,
    }
    fetch('https://api.sendinblue.com/v3/contacts', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        "Content-Type": "application/json",
        "api-key": `${process.env.GATSBY_SIB_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response))
    })
    .catch(error => console.log('Error:', error))
  }

	render() {
		return (
			<form 
        onSubmit={ this.handleSubmit } 
        style={{
          display: `flex`,
        }}
      >
  				<label for="email" className="sr-only" id="email-label">Enter your email address:</label>
          <input
            type="email"
            name="email"
            id="email"
            aria-labelledby="email-label"
            placeholder="ex: john@example.com"
            value={ this.state.email }
            onChange={ this.handleInputChange }
            style={{
              flexGrow: 2,
              marginRight: `0.5rem`,
              paddingLeft: `0.5rem`,
            }}
          />
          
          <SubmitButton type="submit">Subscribe</SubmitButton>

			</form>
		)
	}
}

export default SubscribeForm