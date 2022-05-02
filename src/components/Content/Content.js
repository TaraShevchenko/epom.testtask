import titleUnderline from "../../assets/images/TitleUnderline.svg";
import message from "../../assets/images/Message.svg";
import ceo from "../../assets/images/Ceo.png";

import "./Content.scss";


const Content = () => (
  <div className="content">

    <h1 className="content__title">
      Epom –
      {" "}
      <span className="title__animate_word">
        Customizable
        <img className="title__animate_underline"
             src={titleUnderline}
             alt="underline"/>
      </span>
      {" "}
      Google Ad Manager Alternative
    </h1>

    <div className="content__description">
      Stay cool this summer with Epom: get a 75% discount on our white-label technology and build your own DSP
      right away.
    </div>

    <div className="content__ceo_message" style={{backgroundImage: `url(${message})`}}>
      New Epom DSP 4.0 is a pure blast. They provided us with all we needed from the tech side to bring our
      advertising in-house. Usually, it takes years. We’ve managed in two weeks.
    </div>

    <div className="content__ceo">

      <img className="ceo__photo" src={ceo} alt="CEO"/>

      <div>
        <div className="ceo__name">Andrey Petrik</div>
        <div className="ceo__description">CEO at NetHunt</div>
      </div>

    </div>
  </div>
);

export default Content;
