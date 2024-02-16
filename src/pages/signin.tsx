import './main.css';
import './auth.css';
import {
  Link,
} from "react-router-dom";

export function SignInPage() {
    return (
      <div className="form-container">
        <header>Sign in</header>
        <form>
            <input placeholder='username'></input><br /><br /><input placeholder='password'></input>
            <p>Do not have an account? <Link to={'/signup'}>Sign Up</Link></p>
            <button>Submit</button>
        </form>
      </div>
    )
}