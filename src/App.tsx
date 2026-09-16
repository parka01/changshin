import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import profile from './assets/images/profile.jpg';
import logo from './assets/images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <main id="wrap-main">
      <div id="background"></div>
      <header>
        <div className="logo" data-aos="fade-up" data-aos-duration="2000">
          <img src={logo} alt="logo" title="logo" />
        </div>
        <nav>
          <ul id="nav-gnb">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="profile">
        <div className="profile-photo">
          <img src={profile} alt="profile photo" title="profile photo" />
        </div>
        <h1>
          안녕하세요,
          <br />
          기초부터 차곡차곡 다져나가며 성장하는
          <br />
          박아영입니다.
        </h1>
        <p>
          창신을 향한 저의 열정을 소개할 소중한 기회를 주셔서 감사합니다.
          <br />
          7년이라는 긴 시간 땅속에서 매미가 될 준비를 하는 굼벵이처럼 다양한
          경험과 기술을 쌓아왔습니다. 제가 쌓아온 역량들을 활용하여 창신에서
          열심히 성장하겠습니다.
        </p>
      </section>
      <section id="wrap-about">
        <ul id="about">
          <li>
            <div className="date">
              <h3>2026.08</h3>
            </div>
            <div className="content">
              <h3>정보처리기사 필기 합격</h3>
              <p>
                Innovation Engineering부서에서 사용하는 3D렌더링 프로그램
                Rhino에서 활용가능한 Python능력을 갖추고 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div className="date">
              <h3>2026.07</h3>
            </div>
            <div className="content">
              <h3>웹디자인개발기능사 취득</h3>
              <p>
                웹 디자인과 프론트엔드 구현에 대한 기본기를 탄탄하게
                갖추었습니다. UI 설계부터 HTML, CSS, JavaScript를 이용한
                퍼블리싱까지 경험하며, 디자인 의도를 정확하게 구현하는 것을
                목표로 합니다.
              </p>
            </div>
          </li>
          <li>
            <div className="date">
              <h3>2026.07</h3>
            </div>
            <div className="content">
              <h3>컴퓨터그래픽기능사 취득</h3>
              <p>
                Flyknit 개발에 도움이 되는 컴퓨터 그래픽 활용능력을 갖추고
                있습니다.
              </p>
            </div>
          </li>
          <li>
            <div className="date">
              <h3>2024.06</h3>
            </div>
            <div className="content">
              <h3>SQLD 자격증 취득</h3>
              <p>
                데이터베이스에 대한 기본적인 이해가 있으며 빅데이터를 가공하여
                화면에 시각적으로 구현할 수 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div className="date">
              <h3>2021 - 2023</h3>
            </div>
            <div className="content">
              <h3>개발자 경력</h3>
              <p>
                아주대학교 병원 및 (주)인포지아에서 개발자로 근무하여 프로그래밍
                능력을 갖추고 있습니다. 파라메트릭 툴을 사용하는 CAD 사용시
                필요한 Python언어를 이해하고 있기에 창신INC에서 요구사항에 맞춰
                활용할 준비가 되어있습니다.
              </p>
            </div>
          </li>
          <li>
            <div className="date">
              <h3>2016 - 2017</h3>
            </div>
            <div className="content">
              <h3>BCNY Intl.</h3>
              <p>
                미국 뉴욕의 신발회사에서 제품개발 부서에 소속되어 디자이너로
                근무하였습니다. 대표적으로 Michael Kors, Tommy Hilfiger, Kennth
                Cole등 다양한 브랜드를 맡아 제품을 개발하였습니다.
              </p>
            </div>
          </li>
          <li>
            <div className="date">
              <h3>2016.05</h3>
            </div>
            <div className="content">
              <h3>State University of New York College at Buffalo</h3>
              <p>패션 및 섬유공학을 전공하였습니다.</p>
            </div>
          </li>
          <li>
            <div className="date">
              <h3>2016.05</h3>
            </div>
            <div className="content">
              <h3>Fashion Institute of Technology</h3>
              <p>
                패션분야 세계 최고의 학교에서 액세서리학과를 졸업하였습니다.
                발의 인체구조부터 신발디자인 및 신발 제작과정까지 폭넓은 과정을
                전문적으로 배웠습니다.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section id="portfolio"></section>
      <section id="contact"></section>
    </main>
  );
}

export default App;
