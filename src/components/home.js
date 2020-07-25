import React from 'react';
import Example from './navbar';
import { Parallax, Background } from 'react-parallax';
import city from '../image/weather.jpg'
const Home = () => {
    return(
	<div>
        <Example />
        <p className='mt-5 display-3'>Ferofly</p>
		<p id='sub'>----Magnify your journey----</p>
		<div className='m-4'>
		<Parallax strength={500}>
		  <div style={{height:'600px'}}></div>
		  <Background className="custom-bg">
			<img src={city} alt="fill murray" />
		  </Background>
		</Parallax>
	  </div>
	  <div className='container p-3'>
	  <div className='row'>
	  <div className='col-3'>
		<label for='date'>Check In:</label>
		<input type='date' className='form-control' id='date' />
		</div>
		<div className='col-3'>
		<label for='co'>Check Out:</label>
	  <input type='date' className='form-control' id='co' />
	  </div>
	  <div className='col-2'>
	  <label for='adults'>Adults:</label>
		<input type='number' className='form-control' id='adults' defaultValue='1' />
	  </div>
	  <div className='col-2'>
	  <label for='kids'>Kids:</label>
		<input type='number' className='form-control' id='kids' defaultValue='0' />
	  </div>
	  <div className='col-2'>
	  <label className='text-white'>yoo</label>
		<button className='btn btn-block mb-2' id='search'><span className='text-white'>Search</span></button>
	  </div>
	  
	  </div>
	  </div>
    </div>
    )
}

export default Home;