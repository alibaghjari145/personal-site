import './App.css';
import Navbar from './cmp/navbar';
import About from './cmp/about';
import { Route, Routes, Navigate } from "react-router-dom";
import Experiences from './cmp/experiences';
import Home from './cmp/home';
import Skills from './cmp/skills';
import Contacts from './cmp/contact';


function App() {
    return (<Routes >

        <Route strict path='/About'
            element={
                [< About />, < Navbar />]
            }
        />

        <Route path='/Contacts'
            element={
                [< Contacts />, < Navbar />]
            }
        />

        <Route path='/Experiences'
            element={
                [< Experiences />, < Navbar />]
            }
        />

        <Route path='/Skills'
            element={
                [< Skills />, < Navbar />]
            }
        />

        <Route strict path='/home'
            element={
                [< Home />, < Navbar />]
            }
        />
        
        <Route strict path='/'
            element={
                [< Home />, < Navbar />]
            }
        />
    
    </Routes>
    );
}

export default App;