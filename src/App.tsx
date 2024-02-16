import React from 'react';
import { SignUpPage } from './pages/signup';
import { SignInPage } from './pages/signin';
import { ChatPage } from './pages/chat';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/signin",
    element: <SignInPage />
  },
  {
    path: "/chat",
    element: <ChatPage />
  },
])

function Main() {
  return (
  <div className="form-container">
    <header>Main page</header>
    <form>
        <p>Main Page? 
          <Link to={'/signup'}>Sign Up</Link> 
          <Link to={'/signin'}>Sign In</Link> 
          <Link to={'/chat'}>Chat</Link> 
        </p>
    </form>
  </div>
  )
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
