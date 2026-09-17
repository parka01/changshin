import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import profile from './assets/images/profile.jpg';
import logo from './assets/images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperContainer } from 'swiper/element';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import htmlIcon from './assets/images/icon_html.png';
import cssIcon from './assets/images/icon_css.png';
import jsIcon from './assets/images/icon_js.png';
import photoshopIcon from './assets/images/icon_photoshop.png';
import illustratorIcon from './assets/images/icon_illustrator.png';
import premiereIcon from './assets/images/icon_premiere.png';
import chatGPTIcon from './assets/images/icon_chatgpt.png';
import inDesignIcon from './assets/images/icon_indesign.png';
import cad1 from './assets/images/cad1.png';
import cad2 from './assets/images/cad2.png';
import cad3 from './assets/images/cad3.png';
import cad4 from './assets/images/cad4.png';
import cad5 from './assets/images/cad5.png';
import cad6 from './assets/images/cad6.png';
import cad7 from './assets/images/cad7.png';
import cad8 from './assets/images/cad8.png';
import cad9 from './assets/images/cad9.png';
import cad10 from './assets/images/cad10.png';
import cad11 from './assets/images/cad11.png';
import shoes1 from './assets/images/shoes1.jpg';
import shoes2 from './assets/images/shoes2.jpg';
import shoes3 from './assets/images/shoes3.jpg';
import shoes4 from './assets/images/shoes4.jpg';
import shoes5 from './assets/images/shoes5.jpg';
import shoes6 from './assets/images/shoes6.jpg';
import shoes7 from './assets/images/shoes7.jpg';
import shoes8 from './assets/images/shoes8.jpg';
import shoes9 from './assets/images/shoes9.jpg';
import rhino1 from './assets/images/rhino1.png';
import rhino2 from './assets/images/rhino2.png';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
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
        <div className="greeting" data-aos="fade-up" data-aos-duration="2000">
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
        </div>
      </section>
      <section id="wrap-about">
        <div id="about">
          <h2>자격증</h2>
          <div className="history">
            <div className="date">
              <h3>2026.09</h3>
            </div>
            <div className="content">
              <h3>정보처리기사 필기 합격</h3>
              <p>
                Innovation Engineering부서에서 사용하는 3D렌더링 프로그램
                Rhino에서 활용가능한 Python능력을 갖추고 있습니다.
              </p>
            </div>
          </div>
          <div className="line-break"></div>
          <div className="history">
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
          </div>
          <div className="line-break"></div>
          <div className="history">
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
          </div>
          <div className="line-break"></div>
          <div className="history">
            <div className="date">
              <h3>2024.06</h3>
            </div>
            <div className="content">
              <h3>SQLD 자격증 취득</h3>
              <p>
                데이터베이스에 대한 기본적인 이해가 있으며 빅데이터를 가공하여
                화면에 시각적으로 구현할 수 있습니다. Rhino 3D프로그램에서
                데이터가 필요한 경우 활용할 수 있습니다.
              </p>
            </div>
          </div>
          <h2>근무경험</h2>
          <div className="history">
            <div className="date">
              <h3>2024</h3>
            </div>
            <div className="content">
              <h3>KTcs</h3>
              <p>
                코딩을 가르치는 강사로 활동하였습니다. 부산광역시 온라인 교육
                영상 진행자로 활동 및 영상편집을 하였습니다. 총 20편
                제작하였습니다.
              </p>
            </div>
          </div>
          <div className="line-break"></div>
          <div className="history">
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
          </div>
          <div className="line-break"></div>
          <div className="history">
            <div className="date">
              <h3>2016 - 2017</h3>
            </div>
            <div className="content">
              <h3>BCNY Intl.</h3>
              <p>
                미국 뉴욕의 신발회사에서 제품개발 부서에 소속되어 디자이너로
                근무하였습니다. 대표적으로 Michael Kors, Tommy Hilfiger, Kennth
                Cole등 다양한 브랜드를 맡아 제품을 개발하였습니다. <br />
                <br />
                FFANY(Fashion Footwear Association of New York)에서 주관하는
                행사에 참석하여 고객사를 대상으로 제품에 관한 설명을 하였습니다.
              </p>
            </div>
          </div>
          <h2>학력사항</h2>
          <div className="history">
            <div className="date">
              <h3>2016.05</h3>
            </div>
            <div className="content">
              <h3>State University of New York College at Buffalo</h3>
              <p>패션 및 섬유공학을 전공하였습니다.</p>
            </div>
          </div>
          <div className="line-break"></div>
          <div className="history">
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
          </div>
        </div>
      </section>
      <section id="portfolio">
        {/* ---- SECTION CARD NEWS ---- */}
        <section
          id="section-card-news"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="txt-40">Shoes works</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes1} alt="card news image 1" />
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>신발제작</h3>
                    <p>
                      신발라스트에서 갑피부분을 패턴화 하는 방법을 체계적으로
                      알고 있으며 이를 활용하여 다양한 구조의 디자인을 구현할 수
                      있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes2} alt="card news image 2" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes3} alt="card news image 3" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes4} alt="card news image 31" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes5} alt="card news image 4" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes6} alt="card news image 5" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes7} alt="card news image 6" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes8} alt="card news image 7" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={shoes9} alt="card news image 8" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* ---- SECTION CARD NEWS ---- */}
        <section
          id="section-card-news"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="txt-40">Rhino works</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={rhino1} alt="card news image 1" />
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>Rhino 3D</h3>
                    <p>
                      창신INC에서 필요한 Rhino 3D프로그램을 지원기간 동안 학습해
                      보았습니다. 컴퓨터 개발 경력을 활용하여 파라메트릭 툴을
                      회사 시스템에 맞게 학습할 준비가 되어있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={rhino2} alt="card news image 2" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* ---- SECTION CARD NEWS ---- */}
        <section
          id="section-card-news"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="txt-40">CAD works</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad1} alt="card news image 1" />
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>CAD 작업물</h3>
                    <p>
                      신발 CAD작업 능력을 갖고 있어 다양한 컴퓨터그래픽작업에
                      활용이 가능합니다.
                    </p>
                  </div>
                  <ul className="list-icon">
                    <li>
                      <img src={illustratorIcon} alt="illustrator icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="photoshop icon image" />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad2} alt="card news image 2" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad3} alt="card news image 3" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad4} alt="card news image 31" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad5} alt="card news image 4" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad6} alt="card news image 5" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad7} alt="card news image 6" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad8} alt="card news image 7" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad9} alt="card news image 8" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad10} alt="card news image 9" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-cardnews">
                  <img src={cad11} alt="card news image 10" />
                </div>
                <div className="swiper-description"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section
          id="section-video-project"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="txt-40">Video works</h1>
          <p>
            컴퓨터 프로그램을 잘 다루는 편입니다. 새로운 프로그램을 접하더라도
            끈기있게 학습하여 업무를 수행할 수 있습니다.
          </p>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-video">
                  <video
                    src="./videos/video_work_01.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>부산시청 온라인 교육영상</h3>
                    <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                  </div>
                  <ul className="list-icon">
                    <li>
                      <img src={premiereIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={illustratorIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="css icon image" />
                    </li>
                    <li>
                      <img src={chatGPTIcon} alt="chatgpt icon image" />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-video">
                  <video
                    src="./videos/video_work_02.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>부산시청 온라인 교육영상</h3>
                    <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                  </div>
                  <ul className="list-icon">
                    <li>
                      <img src={premiereIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={illustratorIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="css icon image" />
                    </li>
                    <li>
                      <img src={chatGPTIcon} alt="chatgpt icon image" />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-video">
                  <video
                    src="./videos/video_work_03.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>부산시청 온라인 교육영상</h3>
                    <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                  </div>
                  <ul className="list-icon">
                    <li>
                      <img src={premiereIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={illustratorIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="css icon image" />
                    </li>
                    <li>
                      <img src={chatGPTIcon} alt="chatgpt icon image" />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-video">
                  <video
                    src="./videos/video_work_04.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>부산시청 온라인 교육영상</h3>
                    <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                  </div>
                  <ul className="list-icon">
                    <li>
                      <img src={premiereIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={illustratorIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="css icon image" />
                    </li>
                    <li>
                      <img src={chatGPTIcon} alt="chatgpt icon image" />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <div className="swiper-video">
                  <video
                    src="./videos/video_work_05.mp4"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
                <div className="swiper-description">
                  <div>
                    <h3>부산시청 온라인 교육영상</h3>
                    <p>기획, 대본 작성, 진행, 촬영, 편집 총 20화 제작</p>
                  </div>
                  <ul className="list-icon">
                    <li>
                      <img src={premiereIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={illustratorIcon} alt="html icon image" />
                    </li>
                    <li>
                      <img src={photoshopIcon} alt="css icon image" />
                    </li>
                    <li>
                      <img src={chatGPTIcon} alt="chatgpt icon image" />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
      <section id="contact"></section>
    </main>
  );
}

export default App;
