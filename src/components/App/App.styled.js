import styled from "@emotion/styled";

export const Box = styled.div`
    display: block;
    width: 400px;
    margin: 30px auto 0 auto;
    padding: 50px 20px;
    background-color: ${props => props.theme.colors.bgc};
    border: ${props => `2px solid ${props.theme.colors.black}`};
    border-radius: 5px;
`;