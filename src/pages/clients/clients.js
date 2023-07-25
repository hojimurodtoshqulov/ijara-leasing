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
							<h2 data-aos="fade-left" className="clients__title">
								{t("clients.section1.title")}
							</h2>
							<ol data-aos="fade-right">
								<li className="colored">
									<a href={pdfFile} download="file">
										{t("clients.section1.p1")}
									</a>
								</li>
								<li>
									<p>{t("clients.section1.p2")}</p>
								</li>
								<li className="colored">
									<a href={pdfFile} download="file">
										{t("clients.section1.p3")}
									</a>
								</li>
								<li>
									<p>{t("clients.section1.p4")}</p>
								</li>
							</ol>
						</section>
						<section data-aos="fade-up">
							<h2 className="clients__title">{t("clients.section2.title")}</h2>
							<ol>
								<li className="colored">
									<a href={pdfFile} download="file">
										{t("clients.section2.p1")}
									</a>
								</li>
							</ol>
						</section>
						<section data-aos="fade-up">
							<h2 className="clients__title">{t("clients.section3.title")}</h2>
							<ol>
								<li className="colored">
									<a href={pdfFile} download="file">
										{t("clients.section3.p1")}
									</a>
								</li>
								<li>
									<p>{t("clients.section3.p2")}</p>
								</li>
							</ol>
						</section>
					</div>
					<div data-aos="fade-down" className="image">
						<div className="img_wrap">
							<img src={clientImage} alt="logo" />
						</div>
						<div className="image__content">
							<h3>{t("clients.management.name")}</h3>
							<p>{t("clients.management.title")}</p>
							<a href="mailto:info@ijaraleasing.uz">info@ijaraleasing.uz</a>
						</div>
					</div>
				</div>
				<section data-aos="fade-left">
					<h2 className="clients__title">{t("clients.section4.title")}</h2>
					<p>{t("clients.section4.p1")}</p>
					<p>{t("clients.section4.p2")}</p>
					<a href="mailto:info@ijaraleasing.uz">info@ijaraleasing.uz</a>
				</section>
				<section data-aos="fade-right">
					<h2 className="clients__title">{t("clients.section5.title")}</h2>
					<p>{t("clients.section5.p1")}</p>
					<p>{t("clients.section5.p2")}</p>
					<p>{t("clients.section5.p3")}</p>
				</section>
				<section data-aos="fade-left">
					<h2 className="clients__title">{t("clients.section6.title")}</h2>
					<p>{t("clients.section6.p1")}</p>
				</section>
				{/* <div data-aos="fade-right" className="info">
					<h3 className="info__title">
						{t("clients.requisities.title")}
					</h3>
					<h4>{t("clients.requisities.subtitle")}:</h4>
					<p>{t("clients.requisities.p1")}: 20208000805354860001</p>
					<p>{t("clients.requisities.p2")}</p>
					<p>{t("clients.requisities.p3")}</p>
					<p>ИНН 308234550</p>
				</div> */}
			</div>
		</div>
	);
};

export default Clients;
