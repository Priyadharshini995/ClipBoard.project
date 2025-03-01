import './HeadData.css'

const HeadData = () => {
   
      return (
      <header>
        <a href="#" className="HeaderLogo" alt="clipboard">
          <img src={"images/logo.svg"} alt="clipboard" />
        </a>
        <h1 className="HeaderTitle">A history of everything you copy</h1>
        <p className="HeaderPara">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="HeaderBtnsBox">
          <button className="HeaderBtnsBox-IOSBtn">Download for iOS</button>
          <button className="HeaderBtnsBox-MacBtn">Download for Mac</button>
        </div>
      </header>
    );
  }

export default HeadData