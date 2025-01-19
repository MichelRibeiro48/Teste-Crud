import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 24rem;
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ModalContent = styled.p`
  margin-bottom: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #6b7280;
  &:hover {
    color: #1f2937;
  }
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f87171; 
  color: white;
  border-radius: 0.375rem;
  &:hover {
    background-color: #ef4444;
  }
`;