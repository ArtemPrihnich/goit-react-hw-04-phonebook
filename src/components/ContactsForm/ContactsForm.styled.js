import styled from "@emotion/styled";

export const Form = styled.form`
    width: 300px;
    margin: 0 auto;
    padding: 30px 0;
    border: ${(props => `2px solid ${props.theme.colors.black}`)};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.bgc};
`;

export const Label = styled.label`
    display: block;
    width: 150px;
    margin: 0 auto 10px auto;
    text-align: center;
    font-size: 20px;
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

export const Button = styled.button`
    display: block;
    padding: 8px 40px;
    margin: 40px auto 0 auto;
    border: ${props => `2px solid ${props.theme.colors.purple}`};
    border-radius: 4px;
    background-color: ${props => props.theme.colors.lightpurple};
    cursor: pointer;

    &:hover {
        transition-duration: 250ms;
        background-color: ${props => props.theme.colors.purple};
        color: white;
    }
`