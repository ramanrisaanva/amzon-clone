import Category from "./Category";
import Productrow from "./ProductRow";
import Slider from "./Slider";
function Home() {
  return (
    <div className="bg-homebg">
      <Slider />
      <Category />
      <Productrow/>
      <div className="bg-blue p-4 text-white flex justify-center">Back to top</div>
    </div>
  );
}

export default Home;
