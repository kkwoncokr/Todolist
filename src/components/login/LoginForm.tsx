import React, { useState }  from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import useStore from '../../core/mobx/useStore';
import {LoginWrap,LoginContent} from './styles';

const LoginForm = ({history}:RouteComponentProps) => {
    const {auth} = useStore();
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        const { name , value} = e.target;
        setUserData({
            ...userData,
            [name]:value,
        })
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(userData.email === '') {
            alert('이메일을 입력하세요.')
            return;
        } else if(userData.password ==='') {
            alert('패스워드를 입력하시오.')
            return;
        }
        auth.login(userData);
        history.push('/')
    }
    return(
        <LoginWrap>
            <LoginContent>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password"  onChange={handleChange}/>
                    <button type="submit">LOG IN</button>
                </form>
            </LoginContent>
        </LoginWrap>
    );
}

export default withRouter(LoginForm);