import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        <Slider />
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent" className="exploreCategory">
            <img
              src={rentCategoryImage}
              className="exploreCategoryImg"
              alt="rent category"
            />
            <p className="exploreCategoryName">Places for Rent</p>
          </Link>
          <Link to="/category/sale" className="exploreCategory">
            <img
              src={sellCategoryImage}
              className="exploreCategoryImg"
              alt="sell category"
            />
            <p className="exploreCategoryName">Places for Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
