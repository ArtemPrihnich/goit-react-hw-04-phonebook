import styled from "@emotion/styled";

export const List = styled.ul`
    display: block;
    width: 400px;
    margin: 0 auto;
    padding: 0;
`;

export const Item = styled.li`
    display: block;
    text-align: center;
    margin-bottom: 10px;
    padding: 3px;
    border: ${props => `2px solid ${props.theme.colors.purple}`};
    border-radius: 4px;
    background-color: ${props => props.theme.colors.lightpurple};

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Button = styled.button`
    display: inline-block;
    padding: 3px;
    margin-left: 5px;
    border: ${props => `2px solid ${props.theme.colors.purple}`};
    border-radius: 4px;
    background-color: ${props => props.theme.colors.bgc};
    cursor: pointer;

    &:hover {
        transition-duration: 250ms;
        background-color: ${props => props.theme.colors.purple};
        color: white;
    }
`;