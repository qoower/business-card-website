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
            <a href="#experience">Опыт</a>
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
              <a className="textLink" href="#experience">
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

      <section className="scienceSection">
        <div className="science shell">
          <div className="degreeMark" aria-hidden="true">PhD</div>
          <div className="scienceText">
            <p className="sectionNumber light">02 / НАУКА</p>
            <h2>Кандидат физико-математических наук</h2>
            <p className="speciality">
              по специальности «Метеорология, климатология и агрометеорология»
            </p>
            <p>
              Восемь с половиной лет я работал в Главной геофизической обсерватории
              имени А. И. Воейкова: создавал ПО и базы геофизических данных,
              анализировал наблюдения на Python, писал научные статьи и выступал на
              конференциях.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section shell" id="experience">
        <div className="sectionIntro">
          <p className="sectionNumber">03 / ОПЫТ</p>
          <h2>На стыке науки<br />и инженерии</h2>
        </div>
        <div className="timeline">
          <article className="timelineItem">
            <div className="timelineDate">2020 — сейчас</div>
            <div>
              <h3>Главный инженер-разработчик</h3>
              <p className="company">IVA Technologies</p>
              <p>
                Разрабатываю медиапроцессор и кроссплатформенные компоненты WebRTC
                на C++. Внедряю ИИ-функции обработки видео и звука, пишу тесты на
                Python и помогаю новым разработчикам расти в команде.
              </p>
            </div>
          </article>
          <article className="timelineItem">
            <div className="timelineDate">2012 — 2020</div>
            <div>
              <h3>Инженер-программист и научный сотрудник</h3>
              <p className="company">ГГО им. А. И. Воейкова</p>
              <p>
                Проектировал приложения на Qt/C++ для работы с геофизическими
                данными, создавал базы PostgreSQL и применял Python для статистики и
                исследований.
              </p>
            </div>
          </article>
          <div className="skills" aria-label="Ключевые навыки">
            {[
              "C++", "Python", "Qt", "PostgreSQL", "WebRTC", "Linux",
              "Data Science", "ГИС", "Математическая статистика", "Менторство",
            ].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="sectionNumber light">04 / КОНТАКТ</p>
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
