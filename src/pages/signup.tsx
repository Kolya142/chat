import './main.css';
import './auth.css';
import {
  Link,
} from "react-router-dom";

export function SignUpPage() {
    return (
      <div className="form-container">
        <header>Sign up</header>
        <form>
            <input placeholder='username'></input><br /><br /><input placeholder='password'></input>
            <p>Already have an account? <Link to={'/signin'}>Sign In</Link></p>
            <button>Submit</button>
        </form>
      </div>
    )
}