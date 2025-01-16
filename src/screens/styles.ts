import styled from 'styled-components';

export const ContainerEquipment = styled.div`
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const EquipmentForm = styled.form``;

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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const ButtonAdd = styled.button`
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;

    &:hover {
        opacity: 0.5;
        transition: opacity 0.1s ease-in-out;
    }
`;

export const CardEquipment = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  color: #0a0a0a;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
`;

export const ContainerHeaderEquipment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;

export const ContainerHeaderTitleEquipment = styled.div`
  font-size: 1.5rem; 
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.01562em;
`;

export const ContainerInputEquipment = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;
