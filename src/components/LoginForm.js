import React, {useState} from 'react';
import emailCheck from '../shared/EmailCheck';
import useForm from './useForm';
import { TokenToCookie } from '../shared/Cookies';
import { axiosInstance } from '../config';


const ExamSignup = ({ submitForm }) => {
  const { handleSubmit } = useForm(
    submitForm,
    emailCheck
  );

  const [user_email, setUser_email] = useState()
  const [user_pwd, setUser_pwd] = useState()
  const [empty, setEmpty] = useState("")
  const [err_email, setErr_email] = useState("")
  const [err_pw, setErr_pw] = useState("")
  const [err_login, setErr_login] = useState("")

  const login = () => {
      if(user_email ==="" || user_pwd ===""){
        setEmpty("아이디 혹은 비밀번호가 공란입니다. 채워주세요");
        return ;
    }

      if(!emailCheck(user_email)){
          setErr_email("이메일 형식이 맞지 않습니다");
          return ;
      }

      if(user_pwd.length < 6){
        setErr_pw("비밀번호는 최소 6자리 이상이어야합니다");
        return;
      }

      axiosInstance.post('/user/login', {
        username: user_email,
        password: user_pwd,
      }).then((response) => {
        console.log(response)
        // const accessToken = response.data.token
        const accessToken = response.headers.authorization
        TokenToCookie(accessToken);
        localStorage.setItem("token", accessToken);
        window.alert('로그인 성공!');
        // window.location.href="/"
      }).catch((error) => {
        setErr_login("이메일 혹은 비밀번호가 잘못 입력되었습니다")
        console.log(error)
        
      });
    
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            value={user_email}
            onChange={(e) => setUser_email(e.target.value)}
          />
            {empty && <p>{empty}</p>}
            {err_email && <p>{err_email}</p>}
        </div>
      
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={user_pwd}
            onChange={(e) => setUser_pwd(e.target.value)}
          />
          {empty && <p>{empty}</p>}
          {err_pw && <p>{err_pw}</p>}
        </div>
        <button onClick={login} className="form-input-btn" type="button">
          로그인
        </button>
        {err_login && <p className="err">{err_login}</p>}
      </form>
    </div>
  );
};

export default ExamSignup;