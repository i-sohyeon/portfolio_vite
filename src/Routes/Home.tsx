import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "../styles/style.scss";
import {
  UIText,
  UIContent,
  UIHeader,
  UIBox,
  UIBanner,
  UISwiper,
  UITextList,
  SlideItem,
  UITable,
  UIBadge,
  UIAccordion,
  UIDivider,
  UIScroll,
  UIFooter,
} from "../components/v1";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import UIPopup from "../components/UIPopup/component";
// import { Pagination } from 'swiper/modules';

function Home() {
  const textList = [
    "현대카드 커머셜 web/app 운영",
    "우리은행 won 뱅킹 재구축 사업",
    "농협은행 올원뱅크 리뉴얼 구축",
    "KB국민은행 멤버십 플랫폼 구축",
    "KB국민은행 태블릿 브랜치 금융투자상품 판매프로세스 구축",
    "문구야놀자 pc/mobile(적응형) 구축 및 운영",
    "웅진 딸기콩 랜딩페이지 pc/web(반응형) 구축 및 운영",
    "웅진 딸기콩 관리자 페이지",
    "굿뜨래페이 pc/mobile(반응형)",
    "인조이웍스 홈페이지 pc/web(반응형)",
    "포토이 인생사진 mobile",
    "태양광 햇빛마루 pc/mobile(적응형)",
  ];
  const [popupContent, setPopupContent] = useState<React.ReactNode | null>(null);
  const handleOpenPopup = (content: React.ReactNode) => {
    setPopupContent(content);
  };
  const handleClosePopup = () => {
    setPopupContent(null);
  };
  return (
    <>
      <UIHeader size="md">S.H.LEE</UIHeader>

      <UIContent bgColor="gray" bgPattern="check">
        <UIBox.Article align="center" style={{ padding: "240px 0 220px 0" }}>
          <UIText.Header size="xl" align="center" variant="mainTitle" as="h1">
            UI &middot; UX
            <br />
            <span className="gradient-text">WEB PUBLISHER</span>
            <br />
            <span>PORTFOLIO</span>
          </UIText.Header>
        </UIBox.Article>
      </UIContent>

      <UIContent
        bgColor="black"
        className="txt-banner-wrap">
        <div className="txt-banner">
          <div className="txt-banner-list">
            <UIText.Basic font="tenada" size="lg" color="white">
              현대카드
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              우리은행 우리WON뱅킹
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              농협은행 올원뱅크
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              KB국민은행 멤버십 플랫폼
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              문구야 놀자
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              웅진 딸기콩
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              굿뜨래페이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              인조이웍스
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              포토이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              태양광
            </UIText.Basic>
          </div>
          <div className="txt-banner-list">
            <UIText.Basic font="tenada" size="lg" color="white">
              현대카드
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              우리은행 우리WON뱅킹
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              농협은행 올원뱅크
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              KB국민은행 멤버십 플랫폼
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              문구야 놀자
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              웅진 딸기콩
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              굿뜨래페이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              인조이웍스
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              포토이
            </UIText.Basic>
            <UIText.Basic font="tenada" size="lg" color="white">
              태양광
            </UIText.Basic>
          </div>
        </div>
      </UIContent>


      {/* <UIContent bgColor="gray" bgPattern="waveyellow">
        <UIBox.Article as="article" align="center">
          <UIText.Header size="lg" align="left">ABOUT ME</UIText.Header>
          <UIBox.Div variant="content" jContent="space-between" aItems="middle" className="pt-0">
          저는 2021년 인조이 웍스에서 UI·UX 디자인과 퍼블리싱을 시작으로 커리어를 쌓아왔습니다.
현재는 퍼블리싱 업무를 중심으로 실무를 진행하고 있지만,
디자인에 대한 관심과 학습을 꾸준히 이어가고 있습니다.

일러스트·포토샵 및 웹디자인 기능사 자격증을 보유하고 있으며,
개인 작업을 통해 디자인 역량 또한 지속적으로 발전시키고 있습니다.

디자인과 구현을 모두 이해하는 역량을 바탕으로,
필요한 상황에서는 언제든 디자인 업무까지 확장할 수 있는 유연한 인재입니다.
          </UIBox.Div>          
        </UIBox.Article>
      </UIContent> */}




      <UIContent bgColor="blue" bgPattern="waveyellow">
        <UIBox.Article as="article" align="center">
          <UIText.Header size="lg" align="left">경력 CAREER</UIText.Header>
          <UIBox.Div variant="flex" jContent="space-between" aItems="middle" className="pt-0">
            <UIBanner.Wrapper className="mr-5 mb-4" animateOnScroll>
              <UIBanner.List
                icon="study"
                number="2020"
                variant="list"
                bgColor="type1"
                title="ui/ux 스마트웹&앱디자인 (웹 퍼블리싱&프론트엔드) 실무과정"
                des="(20202.04~2020.10)" 
                align="left" />
              <UIBanner.List
                icon="company"
                number="2021"
                variant="list"
                bgColor="type2"
                title="인조이웍스(enjoy works)"
                des="(2021.01 ~ 2022.04)" />
              <UIBanner.List
                icon="study"
                number="2022"
                variant="list"
                bgColor="type3"
                title="[프론트엔드] 리액트 (React.js 자바스크립트)_주말"
                des="(2022.01 ~2022.04)" />
              <UIBanner.List
                icon="company"
                number="2023"
                variant="list"
                bgColor="type4"
                title="인픽스(INPIX)"
                des="(2022.06 ~ )" />
              <UIBanner.List
                icon="study"
                number="2024"
                variant="list"
                bgColor="type5"
                title="한국방송통신대학교 컴퓨터과학과 편입 (재학중)"
                des="(2023.09 ~ )" />
              <UIBanner.List
                icon="company"
                number="2026"
                variant="list"
                bgColor="type6"
                title="??????"
                des="(????.?? ~ )" />
            </UIBanner.Wrapper>
            
            <UIBox.Div variant="card">
              <UIText.Header as="p" font="tenada" size="md" className="mb-1">
                프로젝트 경험
              </UIText.Header>
              <UIText.Header as="p" font="tenada" size="md" color="blue">
                Project Experience
              </UIText.Header>
              <UITextList.Check variant="check" size="md" checkItems={textList} />
            </UIBox.Div>
          </UIBox.Div>          
        </UIBox.Article>
      </UIContent>

      <UIContent
        bgColor="gray"
        bgPattern="check"
        style={{ overflowX: "hidden" }}>
        <UIBox.Article variant="content">
          <UIText.Header variant="h3" size="lg">
            PROJECT DETAILS
            <Link to="/Sub">경력기술서 확인하기</Link>
          </UIText.Header>

          <UISwiper.Box
            variant="type1"
            pagination={true}
            navigation={false}
            className="swiper-custom">
            <SwiperSlide>
              <SlideItem 
                title="현대카드 web/app 운영"
                titleColor="black"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hyundaicard.png`}
                bgColor="gray"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/06_content.webp`} alt="" />
                          <UIText.Basic size="md" className="mt-10 mb-6 pl-2" align="left" as="p" weight="bold">✅ 작업한 이벤트 페이지</UIText.Basic>

                          <UIBox.Div display="grid" className="grid-2 pt-0">
                          <UIBox.Div className="mt-4">
                              <UIBox.Scroll 
                                href="https://www.hyundaicard.com/koreanair/event/event_2512.html"
                                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hd_koreanair_year-end.png`} className="mt-5">
                              </UIBox.Scroll>
                              <UIBox.Div className="pl-4">
                                <UIText.Basic size="xs" className="mt-4" align="left" as="p" weight="bold">📂 대한항공카드 이벤트 페이지</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 공통 스타일 가이드를 기반으로 전체 css 수정</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 반응형페이지(PC/Mobile)</UIText.Basic>
                              </UIBox.Div>
                            </UIBox.Div>

                            <UIBox.Div className="mt-4">
                              <UIBox.Scroll 
                                href="https://hyundaicard.com/costco/m/html/costco_cashBack2510_case03_v1.html"
                                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hd_costco_2.png`} className="mt-5">
                              </UIBox.Scroll>
                              <UIBox.Div className="pl-4">
                                <UIText.Basic size="xs" className="mt-4" align="left" as="p" weight="bold">📂 코스트코 이벤트 페이지</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 공통 스타일 가이드를 활용하여 신규페이지 제작</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 모바일 전용 페이지</UIText.Basic>
                              </UIBox.Div>
                            </UIBox.Div>

                            <UIBox.Div className="mt-4">
                              <UIBox.Scroll 
                                href="https://www.hyundaicard.com/m/HCSP/M_koreanair_hk.html"
                                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hd_hyundaiXkoreanair.png`} className=" mt-5">
                              </UIBox.Scroll>
                              <UIBox.Div className="pl-4">
                                <UIText.Basic size="xs" className="mt-4" align="left" as="p" weight="bold">📂 현대카드 X 대한항공 이벤트 페이지</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 공통 스타일 가이드를 활용하여 신규페이지 제작</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 모바일 전용 이벤트 페이지</UIText.Basic>
                              </UIBox.Div>
                            </UIBox.Div>

                            <UIBox.Div className="mt-4">
                              <UIBox.Scroll 
                                href="https://www.hyundaicard.com/m/tribe/html/amex_centurion_newyork.html"
                                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hd_tribe_event.png`} className="mt-5">
                              </UIBox.Scroll>
                              <UIBox.Div className="pl-4">
                                <UIText.Basic size="xs" className="mt-4" align="left" as="p" weight="bold">📂 tribe 이벤트 페이지</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 공통 스타일 가이드를 활용하여 제작</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 라이트/다크모드 적용</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 모바일 전용 페이지</UIText.Basic>
                              </UIBox.Div>
                            </UIBox.Div>

                            <UIBox.Div className="mt-4">
                              <UIBox.Scroll 
                                href="https://www.hyundaicard.com/costco/m/html/costco_pyeongtaek1.html"
                                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hd_costco.png`} className=" mt-5">
                              </UIBox.Scroll>
                              <UIBox.Div className="pl-4">
                                <UIText.Basic size="xs" className="mt-4" align="left" as="p" weight="bold">📂 코스트코 이벤트 페이지</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 공통 스타일 가이드를 활용하여 신규페이지 제작</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 모바일 전용 페이지</UIText.Basic>
                              </UIBox.Div>
                            </UIBox.Div>

                            <UIBox.Div className="mt-4">
                              <UIBox.Scroll 
                                href="https://www.hyundaicard.com/emart/m/html/emart_event2501.html"
                                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hd_emart.png`} className="mt-5">
                              </UIBox.Scroll>
                              <UIBox.Div className="pl-4">
                                <UIText.Basic size="xs" className="mt-4" align="left" as="p" weight="bold">📂 이마트 이벤트 페이지</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 공통 스타일 가이드를 활용하여 제작</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 모바일 전용 페이지</UIText.Basic>
                              </UIBox.Div>
                             
                            </UIBox.Div>

                            <UIBox.Div className="mt-4">
                              <UIBox.Scroll 
                                href="https://www.hyundaicard.com/mdm/thepurple/m_dm_purple_2501.html"
                                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/hd_the_purple.png`} className=" mt-5">
                              </UIBox.Scroll>
                              <UIBox.Div className="pl-4">
                                <UIText.Basic size="xs" className="mt-4" align="left" as="p" weight="bold">📂 the purple special offer</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 공통 스타일 가이드를 활용하여 콘텐츠 수정</UIText.Basic>
                                <UIText.Basic size="xs" className="mt-1" align="left" as="p" weight="normal">- 모바일 전용 페이지</UIText.Basic>
                              </UIBox.Div>
                            </UIBox.Div>
                          </UIBox.Div>
                        </div>
                    </div>
                  )
                }
                >
                 <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>현대카드 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2024. 12. ~</td>
                      </tr>
                      <tr>
                        <th scope="row">작업 참여인원</th>
                        <td>퍼블리싱 8명 </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>CMS, VSCode, Figma, HTML, CSS, JQuery, Javascript</td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td><a href="https://www.hyundaicard.com" target="_blank" rel="noopener noreferrer">www.hyundaicard.com</a></td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#CMS</UIBadge>
                  <UIBadge size="md" variant="line">#유지보수</UIBadge>
                  <UIBadge size="md" variant="line">#적응형</UIBadge>
                  <UIBadge size="md" variant="line">#Webview</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="우리은행 won 뱅킹 재구축"
                titleColor="white"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/wooribank.png`}
                bgColor="navy"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/wooribank.png`} alt="" />
                        </div>
                        <p><br/>해당 팝업 영역은 현재 이미지 작업중입니다. <br/> <strong>경력 기술서</strong>를 확인해주세요!<br/> 현재는 [문구야놀자] 슬라이드부터 팝업 이미지를 확인하실 수 있습니다!! </p>
                    </div>
                  )
                }
                >

                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>우리은행 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2024. 04. ~ 2024. 12</td>
                      </tr>
                      <tr>
                        <th scope="row">작업 참여인원</th>
                        <td>퍼블리싱 12명 </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Figma, React, css(scss), Typescript, Git, pnpm</td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td>우리WON뱅킹 앱</td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#접근성</UIBadge>
                  <UIBadge size="md" variant="line">#React</UIBadge>
                  <UIBadge size="md" variant="line">#다크모드</UIBadge>
                  <UIBadge size="md" variant="line">#APP구축</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="농협 올원뱅크 리뉴얼 구축"
                titleColor="black"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/nhbank.png`}
                bgColor="green"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/nhbank.png`} alt="" />
                        </div>
                        <p><br/>해당 팝업 영역은 현재 이미지 작업중입니다. <br/> <strong>경력 기술서</strong>를 확인해주세요!<br/> 현재는 [문구야놀자] 슬라이드부터 팝업 이미지를 확인하실 수 있습니다!! </p>
                    </div>
                  )
                }
                >
                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>농협 올원뱅크 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2023. 08. ~ 2024. 03</td>
                      </tr>
                      <tr>
                        <th scope="row">작업 참여인원</th>
                        <td>퍼블리싱 3명 </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Html, Css, JQuery, Javascript, Git, AdobeXD</td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td>NH올원뱅크 앱</td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#디버깅</UIBadge>
                  <UIBadge size="md" variant="line">#재구축</UIBadge>
                  <UIBadge size="md" variant="line">#다크모드</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="KB국민은행 멤버십 플랫폼"
                titleColor="yellow"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/kbbank.png`}
                bgColor="brown"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/kbbank.png`} alt="" />
                        </div>
                        <p><br/>해당 팝업 영역은 현재 이미지 작업중입니다. <br/> <strong>경력 기술서</strong>를 확인해주세요!<br/> 현재는 [문구야놀자] 슬라이드부터 팝업 이미지를 확인하실 수 있습니다!! </p>
                    </div>
                  )
                }
                >
                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>KB국민은행 멤버십 플랫폼 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2022. 11. ~ 2023. 07</td>
                      </tr>
                      <tr>
                        <th scope="row">작업 참여인원</th>
                        <td>퍼블리싱 4명 </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Html, Scss, JQuery, Javascript, Gulp, Figma, CMS </td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td>KB스타뱅킹 앱</td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#Gulp</UIBadge>
                  <UIBadge size="md" variant="line">#Git</UIBadge>
                  <UIBadge size="md" variant="line">#재구축</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="문구야놀자(PC/Mobile)"
                titleColor="purple"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/playmoongu.png`}
                bgColor="yellow"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                    
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/01_content.webp`} alt="" />
                        </div>
                    </div>
                  )
                }
                >
                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>문구야놀자 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2021. 01. ~ 2022. 04</td>
                      </tr>
                      <tr>
                        <th scope="row">참여도</th>
                        <td>100% </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Html, Css(Scss), JQuery, Javascript, Gulp, Zeplin, AdobeXD </td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td><a href="https://playmoongu.com/brand" target="_blank" rel="noopener noreferrer">playmoongu.com/brand</a></td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#반응형</UIBadge>
                  <UIBadge size="md" variant="line">#Git</UIBadge>
                  <UIBadge size="md" variant="line">#구축</UIBadge>
                  <UIBadge size="md" variant="line">#gulp</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="딸기콩(PC/Mobile)"
                titleColor="green"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/ddalgicong.png`}
                bgColor="red"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/03_content.webp`} alt="" loading="lazy" />
                        </div>
                    </div>
                  )
                }
                >
                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>딸기콩 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2021. 01. ~ 2022. 04</td>
                      </tr>
                      <tr>
                        <th scope="row">참여도</th>
                        <td>100% </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Html, Css(Scss), JQuery, Javascript, Gulp, Zeplin, AdobeXD </td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td><a href="https://www.ddalgicong.com" target="_blank" rel="noopener noreferrer">www.ddalgicong.com</a></td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#gulp</UIBadge>
                  <UIBadge size="md" variant="line">#Git</UIBadge>
                  <UIBadge size="md" variant="line">#구축</UIBadge>
                  <UIBadge size="md" variant="line">#반응형</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>
       
            <SwiperSlide>
              <SlideItem 
                title="인조이웍스 홈페이지"
                titleColor="black"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/enjoyworks.png`}
                bgColor="yellowgreen"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/05_content.webp`} alt="" />
                        </div>
                    </div>
                  )
                }
                >
                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>인조이웍스 홈페이지 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2021. 01. ~ 2022. 04</td>
                      </tr>
                      <tr>
                        <th scope="row">참여도</th>
                        <td>100% </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Html, Css(Scss), JQuery, Javascript, Gulp, Zeplin, AdobeXD </td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td><a href="http://enjoyworks.co.kr" target="_blank" rel="noopener noreferrer">enjoyworks.co.kr</a></td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#반응형</UIBadge>
                  <UIBadge size="md" variant="line">#Git</UIBadge>
                  <UIBadge size="md" variant="line">#구축</UIBadge>
                  <UIBadge size="md" variant="line">#gulp</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="굿뜨래페이"
                titleColor="white"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/goodtraepay.png`}
                bgColor="navy"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/04_content.webp`} alt="" />
                        </div>
                    </div>
                  )
                }
                >
                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>굿뜨래페이 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2021. 01. ~ 2022. 04</td>
                      </tr>
                      <tr>
                        <th scope="row">참여도</th>
                        <td>100% </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Html, Css(Scss), JQuery, Javascript, Gulp, Zeplin, AdobeXD </td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td><a href="https://goodtraepay.buyeo.go.kr" target="_blank" rel="noopener noreferrer">goodtraepay.buyeo.go.kr</a></td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#유지보수</UIBadge>
                  <UIBadge size="md" variant="line">#Git</UIBadge>
                  <UIBadge size="md" variant="line">#적응형</UIBadge>
                  <UIBadge size="md" variant="line">#gulp</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>

            <SwiperSlide>
              <SlideItem 
                title="딸기콩 관리자"
                titleColor="green"
                // content="Adaptive Page Publishing"
                imgSrc={`${import.meta.env.BASE_URL}assets/images/swiper/ddalgicong_admin.png`}
                bgColor="red"
                onClick={() =>
                  handleOpenPopup(
                    <div className="">
                      {/* 팝업에 나올 전용 내용 */}
                        <div>
                          <img src={`${import.meta.env.BASE_URL}assets/images/swiper/02_content.webp`} alt="" />
                        </div>
                    </div>
                  )
                }
                >
                <UITable.Default className="mt-4" variant="type1" size="md" align="left">
                  <table>
                    <caption>딸기콩 관리자 프로젝트 참여기간, 인원, 사용 툴, 주소</caption>
                    <tbody>
                      <tr>
                        <th scope="row">프로젝트 기간</th>
                        <td>2021. 01. ~ 2022. 04</td>
                      </tr>
                      <tr>
                        <th scope="row">참여도</th>
                        <td>100% </td>
                      </tr>
                      <tr>
                        <th scope="row">사용 툴</th>
                        <td>VSCode, Html, Css(Scss), JQuery, Javascript, Gulp, Zeplin, AdobeXD </td>
                      </tr>
                      <tr>
                        <th scope="row">웹주소</th>
                        <td>.</td>
                      </tr>
                    </tbody>
                  </table>
                </UITable.Default>
                <div className="mt-4">
                  <UIBadge size="md" variant="line">#유지보수</UIBadge>
                  <UIBadge size="md" variant="line">#Git</UIBadge>
                  <UIBadge size="md" variant="line">#재구축</UIBadge>
                  <UIBadge size="md" variant="line">#부트스트랩</UIBadge>
                  <UIBadge size="md" variant="line">#gulp</UIBadge>
                </div>
              </SlideItem>
            </SwiperSlide>
          </UISwiper.Box>

        {/* 팝업 조건부 렌더링 */}
        {popupContent && <UIPopup content={popupContent} onClose={handleClosePopup} />}
        </UIBox.Article>
      </UIContent>

      <UIContent bgColor="pink">
        <UIBox.Article variant="content">
          <UIText.Header size="lg">ABOUT PORTFOLIO</UIText.Header>
          <UIAccordion.Line variant="line" id="acc-1" title="1. 접근성 (Accessibility)">
            <ul>
              <li>
                <UIText.Basic size="sm" as="p" className="mt-10 mb-5">
                  🎨 웹 콘텐츠 접근성 지침(WCAG) 준수명도 대비 기준 충족 (예: 텍스트/배경 대비 4.5:1 이상)
                </UIText.Basic>
                <UIBox.Div>
                  <img src={`${import.meta.env.BASE_URL}assets/images/etc/acc_web_accessibility.webp`} alt="" />
                </UIBox.Div>
              </li>
              <li>
                <UIText.Basic size="sm" as="p" className="mt-10 mb-5">
                  📑 시멘틱 태그 사용 &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;
                </UIText.Basic>
                <UIBox.Div>
                  <img src={`${import.meta.env.BASE_URL}assets/images/etc/acc_semantic.webp`} alt="" />
                </UIBox.Div>
              </li>
              {/* <li>⌨️ 키보드 네비게이션 지원</li> */}
            </ul>
          </UIAccordion.Line>
          <UIDivider variant="type2" margin="0"/>
          <UIAccordion.Line variant="line" id="acc-2" title="2. 반응형 디자인 (Responsive Design)">
            <ul>
              <li>
                <UIText.Basic size="sm" as="p" className="mt-10 mb-5">
                  📱 모바일, 태블릿, 데스크톱 해상도 대응 (Media Query를 사용하여 각 디바이스별 분기처리)
                </UIText.Basic>
                <UIBox.Div>
                  <img src={`${import.meta.env.BASE_URL}assets/images/etc/acc_mediaquery.webp`} alt="" />
                </UIBox.Div>
              </li>
              <li>
                <UIText.Basic size="sm" as="p" className="mt-10 mb-5">
                  📏 뷰포트 단위 활용 (vw, vh, rem 등)
                </UIText.Basic>
                <UIBox.Div>
                  <img src={`${import.meta.env.BASE_URL}assets/images/etc/acc_web_unit.webp`} alt="" />
                </UIBox.Div>
              </li>
            </ul>
          </UIAccordion.Line>
          <UIDivider variant="type2" margin="0"/>
          <UIAccordion.Line variant="line" id="acc-2" title="3. 성능 최적화 (Performance Optimization)">
            <ul>
              <li>
                <UIText.Basic size="sm" as="p" className="mt-10 mb-5">
                  🏙️ 이미지 압축 (WebP, AVIF)
                </UIText.Basic>
                <UIBox.Div>
                  <img src={`${import.meta.env.BASE_URL}assets/images/etc/acc_webpimg.webp`} alt="" />
                </UIBox.Div>
              </li>
            </ul>
          </UIAccordion.Line>
        </UIBox.Article>
      </UIContent>
      <UIFooter />
      <UIScroll.TopButton/>
    </>
  );
}

export default Home;
