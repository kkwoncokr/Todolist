import styled from '@emotion/styled';

export const LoginWrap = styled.section`
    width:100%;
    height:100vh;
    padding:100px 0;
    box-sizing:border-box;
    background-color:#9da6c9;
    position:relative;
`;

export const LoginContent = styled.article`
    width:500px;
    height:280px;
    background-color:#fff;
    margin:0 auto;
    font-family: 'Ubuntu', sans-serif;
    border:2px solid #eee;
    border-radius:5px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    padding:30px;
    box-sizing:border-box;
    h2 {
        text-align:center;
        letter-spacing:-2px;
        margin:0;
        margin-bottom:20px;
    }
    input {
        width:100%;
        height:40px;
        box-sizing:border-box;
        margin-bottom:10px;
        border:none;
        border-bottom:2px solid #ccc;
        font-size:20px;
        letter-spacing:-1.5px;
        outline:none;
        &:focus {
            border-bottom:2px solid #9da6c9;
        }
    }
    button {
        width:100%;
        height:50px;
        border:none;
        background-color:#9da6c9;
        color:#fff;
        font-size:16px;
        letter-spacing:-1.5px;
        margin-top:10px;
        cursor:pointer;
    }
    @media (max-width:500px) {
        width:90%;

    }
`;