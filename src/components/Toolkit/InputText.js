import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  border-radius: 0;
  border: 3px solid grey;
  padding: 0.5em 1em;
  height: 50px;
  min-width: 200px;

  &:focus {
    outline: none;
    border: 3px solid red;
  }
`;

const InputText = () => {
  return ( 
    <Container className="e-input">
      <Label for="name" className="e-input__label">Text Label</Label>
      <Input type="text" name="name" id="name" className="e-input__field" />
    </Container>
   );
}
 
export default InputText;