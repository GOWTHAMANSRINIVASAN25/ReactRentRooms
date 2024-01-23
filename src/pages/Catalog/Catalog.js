import { useState } from "react";
import Navigation from "../../components/Navigation/Nav";
import Products from "../../components/Products/Products";
import products from "../../components/db/data";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card";

function Catalog(){
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const filteredItems = products.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
 
  
    // ------------ Button Filtering -----------
   
  
    function filteredData(products, selected, query) {
      let filteredProducts = products;
  
      // Filtering Input Items
      if (query) {
        filteredProducts = filteredItems;
      }

      // Applying selected filter
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, company, newPrice, title,noofrooms,location }) =>
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected ||
            noofrooms === selected ||
            location === selected
        );
      }
      return filteredProducts.map(
        ({ id,img, title,  prevPrice, newPrice,noofrooms,location,category,parking,dealer }) => (
          
          <Card
            key={Math.random()}
            // key={id}
            id={id}
            img={img}
            title={title}
           category={category}
            prevPrice={prevPrice}
            newPrice={newPrice}
            noofrooms={noofrooms}
            location={location}
            parking={parking}
            dealer={dealer}
          />
        )
      );
    }
  
    const result = filteredData(products, selectedCategory, query);
    return (
      <>     

            <Sidebar handleChange={handleChange} />
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Products result={result} />
           

      </>
   
    ); 
}
export default Catalog;