import React from 'react';
import logo from './logo.svg';
import './App.css';
import SanPham from './components/scripts/SanPham'

function App() {
    return ( <div className = "App">
        <header className = "App-header">  
        <SanPham tensanPham = "MacBookPro 2014" masanPham = "1" giasanPham = "60.000.000">áhdjksa</SanPham>
        <SanPham tensanPham = "MacBookPro 2015" masanPham = "2" giasanPham = "70.000.000"></SanPham> 
        <SanPham tensanPham = "MacBookPro 2016" masanPham = "3" giasanPham = "80.000.000"></SanPham> 
        <SanPham tensanPham = "MacBookPro 2017" masanPham = "4" giasanPham = "90.000.000"></SanPham> 
        <SanPham tensanPham = "MacBookPro 2018" masanPham = "5" giasanPham = "100.000.000"></SanPham> 
        <SanPham tensanPham = "MacBookPro 2019" masanPham = "6" giasanPham = "110.000.000"></SanPham> 
        <SanPham tensanPham = "MacBookPro 2020" masanPham = "7" giasanPham = "120.000.000"></SanPham> 
        <SanPham tensanPham = "MacBookPro 2021" masanPham = "8" giasanPham = "130.000.000"></SanPham>       
        </header>
        </div>
    );
}
export default App;