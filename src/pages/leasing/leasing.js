import Button from "../../components/button/button";
import CarImg from "../../media/requisities-img.png";
import InfoCard from "../../components/infoCard/infoCard";
import iconSearch from "../../media/icon-search.png";
import iconFile from "../../media/icon-file.png";
import iconPen from "../../media/icon-pen.png";
import icocFileHands from "../../media/icon-handFile.png";

import "./style.scss";

const Leasing = () => {
  return (
    <div className="leasing">
      <section className="leasing__hero">
        <div className="leasing__hero-img">
          <img src={CarImg} alt="" />
        </div>
        <div className="container">
          <div className="leasing__hero-wrapper">
            <h1 className="leasing__hero-title">Экспресс лизинг</h1>
            <p className="leasing__hero-text">
              С целью сделать продукты лизинга доступным широкому кругу
              предпринимателей ООО «Ijara Leasing», ВПЕРВЫЕ в Узбекистане,
              запустила новый продукт – Экспресс лизинг строительной
              специализированной техники.
            </p>
            <div className="leasing__hero-btns">
              <div className="leasing__hero-btn">
                <Button btnLink={"/"} btnTitle={"Лизинговые программы"} />
              </div>
              <div className="leasing__hero-btn">
                <Button
                  btnLink={"/"}
                  btnTitle={"Экспресс лизинг"}
                  btnStyle={"emptyBtn"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="leasing__cards">
          <InfoCard text={"месяцев срок лизинга"} title={"18-48"} />
          <InfoCard text={"минимальный авансовый платеж"} title={"36%"} />
          <InfoCard text={"ставка удорожания"} title={"20%"} />
          <InfoCard text={"комиссия за рассмотрение"} title={"2%"} />
        </div>
        <section className="explain">
          <h2 className="explain__title">Как получить лизинг</h2>
          <div className="explain__wrapper">
            <div className="explain__item">
              <img src={iconSearch} alt="" />
              <p className="explain__item-text">Вы выбираете оборудование</p>
            </div>
            <div className="explain__item">
              <img src={iconFile} alt="" />
              <p className="explain__item-text">
                Заполняете заявку на лизинговое финансирование и передаете ее на
                рассмотрение
              </p>
            </div>
            <div className="explain__item">
              <img src={iconPen} alt="" />
              <p className="explain__item-text">
                Вы подписываете комплект документов по сделке, оформляете залог
                и оплачиваете авансовый платеж
              </p>
            </div>
            <div className="explain__item">
              <img src={icocFileHands} alt="" />
              <p className="explain__item-text">
                С этого момента договор лизинга и договор купли-продажи
                считается вступившими в силу!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Leasing;
