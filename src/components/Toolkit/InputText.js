import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
`;

const LabelFloating = styled.label`
  position: absolute;
  left: 1em;
  top: 1em;
  color: black;
  pointer-events: none;
  transition: transform 0.3s ease, top 0.3s ease, font-size 0.3s ease;

  .active & {
    top: 0.25em;
    font-size: 12px;
  }
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

  const setInputState = function () {    
    this.target.closest(".e-input").classList.toggle('active');

    if(this.target.value) {
      this.target.closest(".e-input").classList.add('active');
    }
  }

  return ( 
    <>
      <Container className="e-input">
        <Label htmlFor="name" className="e-input__label">Text Label</Label>
        <Input type="text" name="name" id="name" className="e-input__field" />
      </Container>
      <Container className="e-input">
        <LabelFloating htmlFor="name" className="e-input__label">Text Label Floating</LabelFloating>
        <Input type="text" name="name" id="name" className="e-input__field" onFocus={(ev) => setInputState.call(ev)} onBlur={(ev) => setInputState.call(ev)} />
      </Container>
    </>
   );
}
 
export default InputText;