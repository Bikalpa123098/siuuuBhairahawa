
// import { useNavigate } from "react-router-dom";
import Banner from "../Components/UI/Banner";
import Cart from "../Components/UI/Card";

function Home() {
  const cartData=[{
    title: "Product 1",
    description: "This is product 1", 
    img:"https://images.unsplash.com/photo-1751013781844-fa6a78089e49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  },
  {title: "Product 2",
  description: "This is product 2",   
  img:"https://plus.unsplash.com/premium_photo-1749827142755-fd3d016bcc9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
},

]
  return (
    <div className="pb-10">
      <Banner/>
    <div className="grid grid-cols-3 gap-6">
        {
      cartData.map((item, index) => {
        
        return  <Cart key={index} img={item.img} title={item.title} description={item.description} />
        
})
      }
  
    </div>
    </div>
  );
}
 
export default Home;

//https://coolors.co/673c4f-7f557d-726e97-7698b3-83b5d1
//https://coolors.co/673c4f-7f557d-726e97-7698b3-83b5d1
