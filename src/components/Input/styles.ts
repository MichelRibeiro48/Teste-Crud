import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.5rem;
`;

export const LabelInput = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5; 

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  height: 2.5rem; 
  width: 100%; 
  border-radius: 0.375rem; 
  border: 1px solid #d1d5db;
  background-color: white; 
  padding: 0.5rem 0.75rem;
  font-size: 1rem; 
  line-height: 1.25rem;

  &::file {
    border: 0;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    color: #1f2937;
  }

  &::placeholder {
    color: #6b7280; 
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

`;