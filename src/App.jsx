import './styles/reset.css';
import { LoginPage } from './pages';


import {
  user_manager,
} from './hooks/user_manager.js';


export default function App() {



  return (
    <LoginPage userManager={user_manager}/>
  )
}
