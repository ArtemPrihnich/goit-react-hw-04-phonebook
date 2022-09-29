import styled from "@emotion/styled";

export const Box = styled.div`
    display: block;
    width: 300px;
    margin: 0 auto;
    padding: 20px 0;
`;

export const Label = styled.label`
    display: block;
    margin: 0 auto 20px auto;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
`;

export const Input = styled.input`
    display: block;
    width: 270px;
    outline: none;
    margin: 0 auto 20px auto;
    padding: 5px;
    border: ${props => `2px solid ${props.theme.colors.purple}`};
    border-radius: 4px;
    background-color: ${props => props.theme.colors.lightpurple};

    &::placeholder {
        padding-left: 5px;
        font-style: italic;
    }
`;