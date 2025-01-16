import styled from 'styled-components'

export const CardTable = styled.div``;

export const ButtonFilterTable = styled.button`
    font-weight: bold;
`;

export const ButtonActionsCard = styled.div`
    display: flex;
    gap: 1rem;
`;

export const PaginationCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
`;
export const PaginationButton = styled.button`
    padding: 0.5rem 0.25rem 0.5rem 0.25rem;
    background-color: #e2e8f0;
    border-radius: 0.25rem;

    &:disabled {
      background-color: #f7fafc;
    }
`;

export const CurrentPagination = styled.span``;