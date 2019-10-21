import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 300px;
  margin: 0 auto;
`;

const FormText = styled.div`
  font-size: 20px;
  text-align: center;
`;

const InputBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input``;

const Button = styled.input`
  width: 100px;
  margin: 0 auto;
  border: 1px solid #000;
  text-align: center;
  margin-top: 10px;
`;

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  console.log(submitted);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
  };

  let content = submitted ? (
    <p>
      Thanks for joining in! <br />
      When we're ready to wow you, <br />
      You'll get an email.
    </p>
  ) : (
    <FormWrapper onSubmit={handleSubmit}>
      <FormText>
        A social network,
        <br />
        Where you are the customer.
        <br />
        Ad free. Launching soon.
      </FormText>
      <InputBlock>
        <Label htmlFor="name">Name:</Label>
        <Input
          value={name}
          name="name"
          onChange={event => setName(event.target.value)}
        />
      </InputBlock>
      <InputBlock>
        <Label htmlFor="Email">Email:</Label>
        <Input
          value={email}
          name="Email"
          onChange={event => setEmail(event.target.value)}
        />
      </InputBlock>
      <Button type="submit" value="Submit" />
    </FormWrapper>
  );
  return content;
}

export default App;
