import CarImg from "../../media/requisities-img.png";
import Title from "../../components/title/title";
import "./style.scss";

const Requisites = () => {
  return (
    <div className="requisites">
      <div className="side-img">
        <img className="img" src={CarImg} alt="" />
      </div>
      <div className="container">
        <main className="requisites__content">
          <Title>Реквизиты</Title>
          <section className="requisites__section">
            <Title small border={false}>
              Наименование
            </Title>
            <p className="requisites__text">
              ООО «Ijara Leasing» - Общество с ограниченной ответственностью
              «Ijara Leasing»
            </p>
          </section>
          <section className="requisites__section">
            <Title small border={false}>
              Адрес
            </Title>
            <p className="requisites__text">
              г. Ташкент, Юнусабадский район, Ц-4, массив Кашгар, 26 дом, 38
              кв.Тел.: <a href="tel:+998 (99) 160-90-00">+998 (99) 160-90-00</a>
              , <a href="tel:+998 (99) 161-90-00">+998 (99) 161-90-00</a>
            </p>
          </section>
          <section className="requisites__section">
            <Title small border={false}>
              Банковские реквизиты:
            </Title>
            <p className="requisites__text">
              Расчетный счет (Узб.Сум): 20208000805354860001 Банковские данные
              АИКБ «Ипак Йули», г. Ташкент Код Банка: 00444 ИНН: 308234550
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Requisites;
