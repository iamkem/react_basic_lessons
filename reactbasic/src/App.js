import React from 'react';
import logo from './logo.svg';
import './App.css';
import sinhvien from './components/scripts/sinhvien';

function App() {
    return ( <div className = "App">
        <header className = "App-header">   
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>     
        <h1>Hello. Welcome to my chanel! </h1>
        <div class="box">
            <div class="container-1">
                <span class="icon"><i class="fa fa-search"></i></span>
                <input type="search" id="search" placeholder="Search..." />
            </div>
        </div>
        <p>I'm Kem</p>
        </header>
        <footer className = "App-footer">facebook.com/mjnkool</footer>
        </div>
    );
}

export default App;