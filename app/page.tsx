const ArrowUpRight = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Основная навигация">
          <a className="logo" href="#top" aria-label="Виктор Попов — на главную">
            ВП<span>.</span>
          </a>
          <div className="navLinks">
            <a href="#project">Проект</a>
            <a href="#about">Обо мне</a>
            <a href="#contact">Контакты</a>
          </div>
          <a className="navCta" href="mailto:qoower@gmail.com">
            Написать
          </a>
        </nav>

        <div className="heroGrid shell">
          <div className="heroCopy">
            <p className="eyebrow">Разработчик · Учёный · Метеоролог</p>
            <h1>
              Делаю погоду
              <br />
              <em>понятной</em> для путешествий
            </h1>
            <p className="heroLead">
              Меня зовут Виктор Попов. Я создаю погодный сервис, который помогает
              выбрать направление по типичной погоде — ещё до того, как появится
              точный прогноз.
            </p>
            <div className="heroActions">
              <a
                className="button buttonPrimary"
                href="http://qoowere4.beget.tech/"
                target="_blank"
                rel="noreferrer"
              >
                Открыть сервис <ArrowUpRight />
              </a>
              <a className="textLink" href="#about">
                Обо мне <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="portraitWrap">
            <div className="weatherBadge weatherBadgeTop">
              <span className="weatherIcon">☀</span>
              <span><b>+24°</b> обычно в мае</span>
            </div>
            <div className="portraitFrame">
              <img
                src="/viktor-popov.jpg"
                alt="Виктор Попов — разработчик и метеоролог"
                width="860"
                height="860"
                fetchPriority="high"
              />
            </div>
            <div className="weatherBadge weatherBadgeBottom">
              <span className="weatherIcon">◒</span>
              <span><b>14+ лет</b> в разработке</span>
            </div>
          </div>
        </div>
        <div className="heroTicker" aria-hidden="true">
          <span>МЕТЕОРОЛОГИЯ</span><i>•</i><span>C++</span><i>•</i><span>PYTHON</span><i>•</i>
          <span>DATA SCIENCE</span><i>•</i><span>WEBRTC</span><i>•</i><span>КЛИМАТ</span>
        </div>
      </section>

      <section className="project section shell" id="project">
        <div className="sectionIntro">
          <p className="sectionNumber">01 / ПРОЕКТ</p>
          <h2>Куда поехать,<br />чтобы с погодой повезло?</h2>
        </div>
        <div className="projectContent">
          <p className="bigCopy">
            Обычный прогноз видит лишь несколько дней вперёд. Мой сервис смотрит
            дальше — на многолетнюю климатическую статистику.
          </p>
          <div className="featureGrid">
            <article>
              <span className="featureIndex">01</span>
              <h3>Выберите даты</h3>
              <p>Укажите период будущей поездки, даже если до неё ещё несколько месяцев.</p>
            </article>
            <article>
              <span className="featureIndex">02</span>
              <h3>Сравните места</h3>
              <p>Посмотрите, какая погода обычно бывает в разных направлениях в эти даты.</p>
            </article>
            <article>
              <span className="featureIndex">03</span>
              <h3>Решите увереннее</h3>
              <p>Выбирайте путешествие, опираясь на данные, а не только на сезонные стереотипы.</p>
            </article>
          </div>
          <a
            className="projectLink"
            href="http://qoowere4.beget.tech/"
            target="_blank"
            rel="noreferrer"
          >
            Попробовать сервис <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="about shell">
          <div className="degreeMark" aria-hidden="true">PhD</div>
          <div className="aboutText">
            <p className="sectionNumber light">02 / ОБО МНЕ</p>
            <h2>Разработчик и учёный в сфере метеорологии</h2>
            <p className="speciality">
              Кандидат физико-математических наук по специальности
              «Метеорология, климатология и агрометеорология»
            </p>
            <p>
              Более 14 лет создаю программные продукты и работаю с данными. Соединяю
              инженерный подход, научную методологию и знания о климате, чтобы делать
              сложную информацию понятной и полезной.
            </p>
            <div className="skills" aria-label="Ключевые направления">
              {[
                "C++", "Python", "Метеорология", "Анализ данных", "Data Science",
              ].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="sectionNumber light">03 / КОНТАКТ</p>
          <h2>Обсудим данные,<br />погоду или разработку?</h2>
          <a className="contactMail" href="mailto:qoower@gmail.com">
            qoower@gmail.com <ArrowUpRight />
          </a>
          <div className="footerLine">
            <span>Виктор Попов © 2026</span>
            <span>Иннополис · работаю удалённо</span>
          </div>
        </div>
      </section>
    </main>
  );
}
