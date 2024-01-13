import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
	return (
		<section id='about-us'>
			<div className='background-about-us'></div>
			<div className='about-us-container'>
				<div className='text-about'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, modi. Similique minima
						cupiditate cum qui molestias reprehenderit ad neque aut aspernatur illum pariatur
						voluptate iste repellendus incidunt iusto, delectus mollitia.
					</p>
				</div>
                <div className="title-about">
                    <h2>10 Anos de História</h2>
                    <h3>A langdom é a maior escola de vera cruz</h3>
                </div>
                <div className="image-about"><img src="./fachada.jpg" alt="Fachada Langdom" /></div>
			</div>
		</section>
	)
}

export default AboutUs
