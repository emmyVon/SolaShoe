import GB from "../images/k-black.jpeg";
import fb from "../images/icon-facebook.svg";
import utube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import insta from "../images/icon-instagram.svg";
import logo from "../images/logo.svg";

export const Landing = ({ shoes }) => {
  let array = Object.entries(shoes);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  array = array.slice(0, 3);
  console.log(array);
  return (
    <div>
      <section className="landing">
        <div className="container landing-con">
          <h1>
            Discover the greatest shoe collection at the
            <span>most affordable prices</span>
          </h1>
          <img src={GB} alt="Gucci" />
        </div>
      </section>
      <section className="about_us">
        <div className="container about_con">
          <div className="slider">
            {array.map(([title, shoe]) => {
              return (
                <article className="slide-shoe">
                  <img src={shoe[0].image} alt="shoe" />
                  <div>
                    <p>{title}</p>
                    <p>{shoe[0].price}</p>
                    <button>buy now</button>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="about_right">
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quae quia suscipit, rerum ullam neque at quibusdam! Ipsum commodi
              reprehenderit consectetur error maxime quis consequuntur unde ea
              hic maiores. Debitis.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="container footer-container">
          <div className="footer-left">
            <div>
              <img src={logo} alt="logo" />
              <div>
                <img src={fb} alt="logo" />
                <img src={utube} alt="logo" />
                <img src={twitter} alt="logo" />
                <img src={insta} alt="logo" />
              </div>
            </div>
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <button>Request</button>
        </div>
      </footer>
    </div>
  );
};
