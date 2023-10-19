import './Main.scss'
import ProgressControl from "./ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";
import Register from './Register/Register';



function Main() {
  
  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <Register />
          <Cart />
          <ProgressControl />
        </div>
      </main>
    </>
  );
}

export default Main;
