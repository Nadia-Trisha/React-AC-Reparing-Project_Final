import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

export default function UserInsert() {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
  

    const handleSubmit = (e)=> {
        e.preventDefault();
        userInsert();
       
    }

    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo((val)=>({...val, [name]:value}));
    }

    const userInsert = ()=>{
        axios.post("http://localhost/wdpf55_react/reactapp3/api/userInsert.php", {data:userInfo}).then(res=>{
            alert(res.data.msg);
            return navigate('/users');
        })
       
    }

    console.log(userInfo);

    return (
    <div className='container'>
        <h1>User Entry</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" name='name' value={userInfo.name}  onChange={handleChange} placeholder='Your Name' /><br />
            <input type="email" name='email'  value={userInfo.email} onChange={handleChange} placeholder='Your Email' /><br />
            <input type="text" name='subject'  value={userInfo.email} onChange={handleChange} placeholder='Subject' /><br />
            <input type="text" name='messege'  value={userInfo.email} onChange={handleChange} placeholder='Messege' /><br />
            <input type="submit" name='submit' value="SUBMIT" /><br />
        </form>
    </div>
  )
}