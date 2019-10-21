import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { getResponseCount } from "./backend";

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
  width: 140px;
  margin: 0 auto;
  border: 1px solid #000;
  text-align: center;
  margin-top: 10px;
  display: block;
`;

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("busy");
  const [count, setCount] = useState(0);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    setStatus("loading");
    getResponseCount().then(
      data => {
        setStatus("success");
        setCount(data);
      },
      error => {
        setStatus("failed");
      }
    );
  }, []);

  let button;
  if (status === "loading") {
    button = <Button type="submit" value={status} />;
  } else if (status === "success") {
    button = <Button type="submit" value={`vouch with ${count} others`} />;
  } else if (status === "failed") {
    button = <Button type="submit" value="something wrong" />;
  } else {
    button = <Button type="submit" value="I'll vouch for that" />;
  }

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
      {button}
    </FormWrapper>
  );
  return content;
}

export default App;
