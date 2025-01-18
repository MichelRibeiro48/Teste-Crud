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
    background-color: #CECECE;
    border-radius: 0.25rem;
    width: 2rem;

    &:disabled {
      background-color: #F8F7F7;
    }
`;

export const CurrentPagination = styled.span``;