import styled from '@emotion/styled';

export const TodoWrap = styled.section`
    width:100%;
    height:100%;
`;

export const TodoContents = styled.article`
    width:800px;
    height:100%;
    margin:0 auto;
    padding:50px 0;
    box-sizing:border-box;
    font-family: 'Ubuntu', sans-serif;

    h2.mainTitle {
        text-align:center;
        letter-spacing:-2px;
        font-size:32px;
        color:#9da6c9;
    }
    form.addForm {
        display:flex;
        justify-content: space-evenly;
    }
    form.addForm > input {
        border:none;
        outline:none;
        width:85%;
        height:50px;
        border:1px solid #ccc;
        border-radius:5px;
        padding:10px;
        box-sizing:border-box;
        font-size:20px;
        letter-spacing:-2px;
        box-sizing:border-box;
        @media (max-width:800px) {
            width:65vw;
            height:40px;
            padding:20px;
            font-size:16px;
        }
    }
    form.addForm > button {
        width:10%;
        height:50px;
        background-color:#9da6c9;
        border:none;
        outline:none;
        color:#fff;
        border-radius:5px;
        cursor:pointer;
        transition:all 0.3s;
        font-size:16px;
        letter-spacing:-2px;
        &:hover {
            background-color:#003a70;
        }
        @media (max-width:800px) {
            width:14vw;
            height:42px;
            font-size:14px;
        }
    }
    article.Todoitem {
        width:100%;
        margin: 20px 0;
        border:1px solid #eee;
        padding:40px 20px;
        box-sizing:border-box;
        border-radius:5px;
        background-color:#eaeffd;
        color:#9da6c9;
        letter-spacing:-1.5px;
        position:relative;
        @media (max-width:800px) {
            padding:20px;
        }
    }
    article.Todoitem > .TodoContent {
        font-size:22px;
        font-weight:300;
        margin:0;
        margin-bottom:20px;
    }
    article.Todoitem > button {
        background-color:#fff;
        border:none;
        outline:none;
        padding:8px;
        border-radius:5px;
        color:#9da6c9;
        letter-spacing:-1.5px;
        cursor:pointer;
        &:hover {
            background-color:#9da6c9;
            color:#fff;
        }

    }
    article.Todoitem > input[type="checkbox"] {
        position:absolute;
        bottom:10px;
        right:10px;
    }
    article.Todoitem > input[type="checkbox"]:checked + .TodoContent {
        text-decoration:line-through
    }

    @media (max-width:800px) {
        width:100%;
        padding:20px;
    }
`;