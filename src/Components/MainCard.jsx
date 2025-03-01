import {data} from '../data'
import Card from './Card';
import './MainCard.css'

function MainCard() {
  return (
    <main>
      <div className="SnippetsWrapper">
        <h1 className="SnippetsWrapper-Title">Keep track of your snippets</h1>
        <p className="SnippetsWrapper-Para">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="FeaturesWrapper">
        <div className="FeaturesWrapper-ImgBox">
          <img src={"images/image-computer.png"} alt="" />
        </div>
        <div className="FeaturesWrapper-TxtBox">
          <h2>Quick Search</h2>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
          <h2>iCloud Sync</h2>
          <p>Instantly saves and syncs snippets across all your devices.</p>
          <h2>Complete History</h2>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
      <div className="ClipboardWrapper">
        <h1 className="ClipboardWrapper-Title">Access Clipboard anywhere</h1>
        <p className="ClipboardWrapper-Para">
          Whether you're on the go, or at your computer, you can access all
          your Clipboard snippets in a few simple clicks.
        </p>
        <img src={"images/image-devices.png"} alt="" />
      </div>
      <div className="CardsWrapper">
        <h1 className="CardsWrapper-Title">Supercharge your workflow</h1>
        <p className="CardsWrapper-Para">
          We've got the tools to boost your productivity.
        </p>
        <div className="CardsWrapper-CardsBox">
          {data.map((list, i) => (
            <Card key={i} {...list} />
          ))}
        </div>
        </div>
      <div className="PartnersWrapper">
        <img src={"images/logo-google.png"} alt="google" className="" />
        <img src={"images/logo-ibm.png"} alt="ibm" className="PartnersWrapper-PartnerLogo" />
        <img src={"images/logo-microsoft.png"} alt="microsoft" className="PartnersWrapper-PartnerLogo" />
        <img src={"images/logo-hp.png"} alt="hewlett packard enterprise" className="PartnersWrapper-PartnerLogo"/>
        <img src={"images/logo-vector-graphics.png"} alt="vector graphics" className="PartnersWrapper-PartnerLogo"/>
      </div>
      <div className="ClipInfoWrapper">
        <h1 className="ClipInfoWrapper-Title">Clipboard for iOS and Mac OS</h1>
        <p className="ClipInfoWrapper-Para">
          Available for free on the App Store. Download for Mac or iOS sync with
          iCloud and you're ready to start adding to your clipboard.
        </p>
        <div className="ClipInfoWrapper-BtnsBox">
          <button className="ClipInfoWrapper-BtnsBox-IOSBtn">
            Download for iOS
          </button>
          <button className="ClipInfoWrapper-BtnsBox-MacBtn">
            Download for Mac
          </button>
        </div>
      </div>
    </main>
  );
}
export default MainCard