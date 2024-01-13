import React from 'react'
import './App.css'
import './css2.css'
import './font-awesome.min.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'


const App = () => {
	return (
		<>
			<Navbar />
			<main>
			<Home />
			<AboutUs />
			</main>
		</>
	)
}

export default App
