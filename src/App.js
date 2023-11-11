import "./App.css";
import React ,{useState} from "react"

function App() {
  const [formData, setFormData] = useState({
    email : "",
    password:"",
    passwordConfirm:"",
    passwordKeep: true
  })

  function handleChange(event) {
    const {name,value,type,checked} = event.target;
    setFormData((prevFormdata) => ({
      ...prevFormdata,
      [name] : type === "checkbox" ? checked : value
    }))
  }

   function handleSubmit(event){
    event.preventDefault()
    if (formData.password === formData.passwordConfirm){
      alert("sucessfully signed in")
    }else{
      alert("incorrect password")
      return
    } 

    if(formData.passwordKeep){
      console.log("Password Kept!")
    }
   }

  return (
    <div className="sign_in">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Sign-in</legend>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form_input"
            
          />
          <br />
          <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form_input"
          />
          <br />
          <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          required
          className="form_input"
        />
        <br />
          <input
          id="remember_password"
          type="checkbox"
          name="passwordKeep"
          checked={formData.passwordKeep}
          onChange={handleChange}
        />
        <label htmlFor="remember_password">Remember password</label>
        <br />
        <button type="submit">Sign In</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
