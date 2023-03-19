import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import "./app1.css"
import { FaMapMarkerAlt,FaPhoneAlt,FaDirections,FaBus,FaClock,FaApple,FaUserAlt} from "react-icons/fa";
 import {AiFillMail } from "react-icons/ai";
 import { IoLogoGooglePlaystore } from "react-icons/io5";

const App1 = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
	 //const[filter,setFilter]=useState()
	// const Search=()=>{
	// 	const searchText=(event)=>{
	// 		setFilter(event.target.value);
	// 	}
	// 	let dataSearch=Data.cardData.filter(item=>{
	// 		return object.keys(item).some(key=>{
	// 			item[key].toString().toLowerCase().includes(toString().toLowerCase())
	// 		})
	// 	})
	// }

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
		<div>
			<div id="map">
        <h5><FaPhoneAlt/>Hotline:(+100)123 456 7890</h5>
        <h5>Welcome to our market</h5>
        <h5>USD $</h5>
        <h5>MY WISHLIST</h5>
        <h5>COMPARE</h5>
        <h5><FaUserAlt/>MY ACCOUNT</h5>
      </div>
	  <div id="flat">
        <h3>EMPORIUM</h3>
        <span>All Categories&ensp;<input type="text" placeholder='enter your search'></input></span>
        <h3>login</h3>
      </div>
      <div id="zero">
        <h5>HOME</h5>
        <h5>SHOP</h5>
        <h5>PRODUCTS</h5>
        <h5>BLOG</h5>
        <h5>ABOUT US</h5>
        <h5>CONTACT</h5>

    </div>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
		 <footer id="map1" >
     <h1>Subscribe our Newsletter</h1>
     <input type="email"></input><p>SUBSCRIBE</p>
    </footer>
	<footer>
      <div>
        <h3>CONTACT INFORMATION</h3>
		<p><FaMapMarkerAlt/>2903 Besant Technology,Marthalli</p>
		<p><FaPhoneAlt/>(212) 457-2308</p>
		<p><AiFillMail/>contact@gmail.com</p>
		<p><FaClock/>Mon-Sun/9:00AM-8:00PM</p>
		<p><FaDirections/>Get directions</p>
		<p><FaBus/>Routes to us</p>
      </div>
	  <div>
		<h3>DOWNLOAD OUR APP</h3>
		<button><FaApple/>App Store</button>&ensp;&ensp;
		<button><IoLogoGooglePlaystore/>Google Play</button>
		<h6>PAYMENT METHODS</h6>
		<button>PAYPAL</button>&ensp;&ensp;
		<button>MAESTRO</button>&ensp;&ensp;
		<button>DISCOVER</button>&ensp;&ensp;
		<button>VISA</button>
	  </div>
	  <img src="https://www.mapsofindia.com/maps/karnataka/bangalore-india.jpg" alt="..." height="270px" width="300px"></img>
    </footer>
	<div id="flit">
		<h3>Copyright @ 2019 All Rights Reserved</h3>
		<h3>Designed & Developed by ThemeSeason</h3>
	</div>
	</div>
  )
}

export default App1;