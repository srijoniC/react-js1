import { useState } from 'react'
import './TodoApp.css'
import LogoutComponentComponent from'./LogoutComponent'
// eslint-disable-next-line
import { BrowserRouter,Routes,Route,useNavigate,useParams,Link } from 'react-router-dom'

const WelcomeBack=()=>{
    const params = useParams()
    console.log(params)
    return(
        <div className='WelcomeComponent'>
            <h1>Welcome {username}</h1>
                <div>
                    Manage your todos. <Link to="/todos">Go here</Link>
                </div>
        </div>
    )
}
const ErrorComponent=()=>{
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!appologies for 404</h1>
        </div>
    )
}
function HeaderComponent(){
    return(
        <div className="Header">
            Header<hr/>
        </div>
    )
}

function ListToComponent(){
    const today=new Date();
    const targetDate=new Date(today.getFullYear()+12,today.getMonth(),today.getDate())
    const todos=[{id:1,description:'Learn AWS',done:false,targetDate:targetDate},
                 {id:2,description:'full stack dev',done:true,targetDate:targetDate}]
    console.log(1)
    return(
        <div className="ListToComponent">
            <h1>Thing want to do</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>

                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo=>(
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done}</td>
                                    <td>{todo.targetDate.toDateString}</td>
                                    
                            </tr>
                            
                            )

                        )
                        
                    }
                     
                    </tbody>
                </table>
            </div>
        </div>
    )
}



    
    function Logincomponent(){
        const [username,setUsername]=useState('in28minutes')
        const [password,setPassword]=useState()
        const navigate=useNavigate();
        
        // eslint-disable-next-line 
        const [showSuccessmessage,setShowSuccessmessage]=useState(false)
        function handleUsernameChange(event){
            console.log(event.target.value);
            setUsername(event.target.value)
        }
        function handlePasswordnameChange(event){
            console.log(event.target.value);
            setPassword(event.target.value)
        }
        function handleSubmit(){
            if (username==='in28minutes' && password==='dummy'){
                setShowSuccessmessage(true)
                navigate('/welcome2/in28minutes')
            }
            else{
                console.log('Failed')
                setShowSuccessmessage(false)
            }
            
        }
        
        
    
        return (
            <div className="login">
                <h1>Time to login</h1>

                    
                    <div className="loginForm">
                    {showSuccessmessage ? <div className="successmessage">Authenticated successfully</div> : <div className="successmessage">Authenticated Failed</div>}
                    
                        <div>
                            <label>User Name</label>
                            <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div>
                            <label>Password</label>
                            <input type="text" name="password" value={password} onChange={handlePasswordnameChange}/>
                    </div>
                    <div>
                            <button type="button" name="login" onClick={handleSubmit}>login</button>
                    </div>
                    
                    
                </div>
                
            </div>
        )
        
}
export default function TodoApp(){
    
    return(
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Logincomponent/>}></Route>
                    <Route path='/welcome2/:username' element={<WelcomeBack/>}></Route>
                    
                    <Route path='/todos' element={<ListToComponent/>}></Route>
                    <Route path='/logout'element={<LogoutComponentComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
            
        
        </div>
    )
}
    



