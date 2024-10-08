import {Link ,useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Signup = () => {

    let navigate = useNavigate()

let [signUp , setSignUp] = useState({
            Name :  "" ,
            L_name: "",
            country: "",
            phone: "",
            username: "",
            email : "" ,
            password : ""
})



function sendData(){
        fetch("http://localhost:3000/admin/signup" , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(signUp)
    }).then(x=> x.json()).then((data)=> {
        if(data.error){
        console.log('Error',data.error)
        alert(data.error)
        }
        else {
            const {msg,user} = data;
            alert(user + ' ' + msg)
           navigate("/login")
        }
    })
         
        // console.log( msg[0].fullName);
        // const fullName = name.fullName
        // console.log(name)
        // console.log(msg[0].fullName) 
        // console.log(lovesh)     

        // const {msg, signup,lovesh} = data;
        // console.log('msg is',msg)
        // console.log('array is', signup)
        // console.log('ae',lovesh))
    //  console.log(store)
    // return store
}
function handleSubmit(event) {
    event.preventDefault(); 
    sendData();
  }
  return (
    <div className="form">

        <form onSubmit={handleSubmit}>
        <div className='allfields'>

        <div className='column'>
        
        <div className="container">
            <label>FirstName</label>
            <input type="text" placeholder="e.g. Lovesh" onChange={(e)=> setSignUp({ ...signUp,Name :  e.target.value})}  />
        </div>
        <div className="container">
            <label>Mail</label>
            <input type="email" placeholder="e.g. Lovesh120@mail.com" onChange={(e)=> setSignUp({...signUp , email : e.target.value})} />
        </div>
        <div className="container">
            <label>Password</label>
            <input type="password" placeholder="atleast 6 characters" onChange={(e)=> setSignUp({...signUp,password  : e.target.value })} />
        </div>
        <div className="container">
            <label>Confirm Password</label>
            <input type="password" />
        </div>
        </div>

        <div className='column'>
        
        <div className="container">
            <label>LastName</label>
            <input type="text" placeholder="e.g. Chouchan" onChange={(e)=> setSignUp({ ...signUp, L_name :  e.target.value})}  />
        </div>
        <div className="container">
            <label>Username</label>
            <input type="text" placeholder="e.g. Lovesh120" onChange={(e)=> setSignUp({...signUp , username : e.target.value})} />
        </div>
        <div className="container">
            <label>Country</label>
            <input type="text" placeholder="e.g. Bharat" onChange={(e)=> setSignUp({...signUp, country  : e.target.value })} />
        </div>
        <div className="container">
            <label>Phone No.</label>
            <input type="number"  onChange={(e)=> setSignUp({ ...signUp, phone :  e.target.value})}  />
        </div>
        </div>
        
        </div>
        <div className="button-container">
            <button type="submit">Submit</button>     
        </div>
        <div className='login-link'>
        <li><Link to='/login' >Login Again</Link></li>
        </div>
        </form>
    </div>
  )
}

export default Signup
