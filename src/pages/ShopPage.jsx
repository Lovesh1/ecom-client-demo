// import { Link } from "react-router-dom"
import Nav from "../components/nav"
import Cards from "../components/cards";

const navlinks = [
  {to: '/', label: 'Home', active: false},
  {to: '/shop', label: 'Shop', active: true},
  {to: '#', label: 'Product', active: false},
  {to: '#', label: 'Manage', active: false},
  {to: '#', label: 'Sell', active: false},

];

const shoplist = [
  {image:"../../images/images/banner/b10.jpg", head:"Kaftan", para:"World's finest clothes within price range"}
];

const ShopPage = () => {
  return (
    <>
         <Nav links = {navlinks}/>
         <section className="shophero">
          <div className="browse">
          <h1>Browse your Favourites</h1>
          <input type="text" placeholder="Browse any Brand"></input>
          <button>Search</button>
          </div>

          <Cards card={shoplist}/>
            
         </section>
    </>
  )
}

export default ShopPage
