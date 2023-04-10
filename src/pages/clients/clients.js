import Title from "../../components/title/title";
import { useTranslation } from "react-i18next";
import clientImage from "../../media/client-img.png";
import pdfFile from "../../media/file.pdf";
import "./clients.scss";

const Clients = () => {
  const { t } = useTranslation();
  return (
    <div className="clients">
      <div className="container">
        <div className="clients__hero">
          <div className="content">
            <Title title={t("clients.title")} />
            <section>
              <h2 className="clients__title">Уставные документы</h2>
              <ol>
                <li className="colored">
                  <a href={pdfFile} download="file">
                    Свидетельство о регистрации
                  </a>
                </li>
                <li>
                  <p>
                    Сведения о компании из Единого Государственного Реестра
                    Организаций и Предприятий (ЕГРПО)
                  </p>
                </li>
                <li className="colored">
                  <a href={pdfFile} download="file">
                    Приказ на директора
                  </a>
                </li>
                <li>
                  <p>Решение учредителя о создании ИП 00O ljara Leasing</p>
                </li>
              </ol>
            </section>
            <section>
              <h2 className="clients__title">Уставные документы</h2>
              <ol>
                <li className="colored">
                  <a href={pdfFile} download="file">
                    Свидетельство о регистрации
                  </a>
                </li>
              </ol>
            </section>
            <section>
              <h2 className="clients__title">Страховой случай</h2>
              <ol>
                <li className="colored">
                  <a href={pdfFile} download="file">
                    Перечень документов по претензиям
                  </a>
                </li>
                <li>
                  <p>Порядок рассмотрения страховых претензий</p>
                </li>
              </ol>
            </section>
          </div>
          <div className="image">
            <img src={clientImage} alt="logo" />
            <div className="image__content">
              <h3>Азимов Зафар Баходирович</h3>
              <p>Руководство</p>
              <a href="mailto:info@ijaraleasing.uz">info@ijaraleasing.uz</a>
            </div>
          </div>
        </div>
        <section>
          <h2 className="clients__title">
            Изменение реквизитов Лизингополучателя
          </h2>
          <p>
            В случае изменения реквизитов Лизингополучателя, он обязан уведомить
            об этом факте Лизингодателя путем направления официального письма на
            бланке компании, заверенного печатью и подписью руководителя.
            Оригинал Письма направляется почтой по адресу:Юнусабадский район,
            Ц-5, д.78, кв.13 Ксерокопия письма направляется на электронную почту
          </p>
          <a href="mailto:info@ijaraleasing.uz">info@ijaraleasing.uz</a>
        </section>
        <section>
          <h2 className="clients__title">
            Завершение договора лизинга по истечении срока лизинга
          </h2>
          <p>
            Предмет лизинга передается в собственность Лизингополучателя по
            истечении срока действия Договора лизинга и выполнении
            Лизингополучателем всех своих обязательств по Договору, согласно
            отдельно заключаемому в последний день истечения срока Договора
            лизинга Соглашению о выкупе предмета лизинга.
          </p>
          <p>
            Подготовка Соглашения о выкупе Предмета лизинга начинается только в
            случае отсутствия у Лизингополучателя каких-либо задолженностей по
            Договору лизинга.
          </p>

          <p>
            Срок подготовки документации составляет не более 10 рабочих дней.
          </p>
        </section>
        <section>
          <h2 className="clients__title">
            Досрочное завершение договора лизинга (досрочный выкуп)
          </h2>
          <p>
            В исключительных случаях досрочное завершение договора лизинга может
            быть осуществлено, после предметного рассмотрения Лизингодателем
            обстоятельств указываемых Лизингополучателем.
          </p>
        </section>
        <div className="info">
          <h3 className="info__title">
            Реквизиты <span>IJARA LEASING</span>
          </h3>
          <h4>Банковские реквизиты:</h4>
          <p>Расчетный счет (Узб.Сум): 20208000805354860001</p>
          <p>Банковские данные АИКБ «Ипак Йули», г. Ташкент</p>
          <p>Код Банка 00444</p>
          <p>ИНН 308234550</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
