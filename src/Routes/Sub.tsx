import {
  UIText,
  UIContent,
  UIBox,
  UIHeader,
  UITextList,
  UIBadge,
  UIDivider,
  UIParagraph,
  UIScroll,
  UIFooter,
} from "../components/v1";
import "../styles/style.scss"

function Sub() {
  const data01 = [
    {
      id: 1,
      name: "주요업무 및 담당 역할",
      children: [
        { id: 1-1, name: "- 현대카드 자체 CMS 활용하여 콘텐츠 수정" },
        { id: 1-2, name: "- 매달 발송 되는 이벤트 랜딩 페이지 작업 (코스트코, 이마트, 대한항공 등의 이벤트 페이지)" },
        { id: 1-3, name: "- QA 과정에서 발생한 이슈 대응" },
        { id: 1-4, name: "- EM(outlook mail) 발송 시 전반적인 마크업 담당, 다크모드 적용" },
        { id: 1-5, name: "- 기기별로 반응형 레이아웃을 적용하여 최적화된 인터페이스를 구현" },
        // { id: 1-6, name: "- HTML 마크업 및 CSS 스타일링, javascript 작업" },
        { id: 1-7, name: "- 기획/디자인 변경에 따른 jsp 마크업 수정" },
        { id: 1-8, name: "- 보이는 ARS 페이지 개발 대응 및 유지 보수" },
      ],
    },
    {
      id: 2,
      name: "기술",
      children: [
        { id: 2-1, name: "HTML, CSS, JavaScript, jQuery, CMS, Figma" },
      ],
    },
    {
      id: 3,
      name: "상세 성과 및 작업 내용",
      children: [
        { id: 3-1, name: "- 다크모드 / 라이트모드 대응 :  prefers-color-scheme 및 사용자 설정에 따라 다크/라이트 테마 UI를 구현하여 사용성 증가" },
        { id: 3-2, name: "- EM (outlook) 발송 작업과 같은 반복적인 퍼블리싱 작업을 템플릿화 하여 화면 제작 속도를 약 30% 감축" },
        { id: 3-3, name: "- Windows 11 환경에서 Outlook 메일의 파싱 오류 및 레이아웃 붕괴 현상 발견 및 원인 분석 및 수정, 이메일 템플릿 구조를 개선하여 이후 배포되는 모든 메일의 호환성을 확보" },
        { id: 3-4, name: "- 사용자 피드백을 반영하여 접근성 관련 마크업 개선, 웹접근성 심사 통과" },
        { id: 3-5, name: "- 다양한 해상도에서 UI가 깨지는 문제를 개선을 위해 반응형 레이아웃 적용 (CSS 미디어쿼리를 활용해 주요 페이지의 가독성과 사용자 편의성 높임)" },
      ],
    },
  ];

  const data02 = [
    {
      id: 1,
      name: "주요 업무 및 담당 역할",
      children: [
        { id: 1-1, name: "- React를 활용한 UI 컴포넌트 마크업 및 스타일 작업" },
        { id: 1-2, name: "- 금융 서비스 내 인증·보안, 이벤트, 공지사항 관련 화면 퍼블리싱 및 구축" },
        { id: 1-3, name: "- 기획·디자인·개발팀과 협업하여 컴포넌트 설계 및 UI/UX 개선 의견 제안" },
        { id: 1-4, name: "- 웹접근성 가이드 준수한 마크업 작업으로 웹접근성 인증 마크 획득에 기여" },
      ],
    },
    {
      id: 2,
      name: "기술",
      children: [{ id: 2-1, name: "React, JavaScript(TypeScript), CSS(SCSS), Git, Figma" }],
    },
    {
      id: 3,
      name: "상세 성과 및 작업 내용",
      children: [
        { id: 3-1, name: "- Storybook 디자인 시스템을 활용하여 재사용 가능한 UI 컴포넌트 구현 및 화면 구축 효율성 향상." },
        { id: 3-2, name: "- OTP·본인 인증·이벤트·공지사항 등 금융 서비스 화면의 마크업 작업 수행. " },
        { id: 3-3, name: "- 웹접근성 표준을 준수한 마크업 및 시맨틱 구조 설계  프로젝트에서 웹접근성 인증 마크 획득에 기여" },
        { id: 3-4, name: "- 웹 접근성 관련 이슈 대응(ios: voice over, aos: talk back)" },
        { id: 3-5, name: "- 이벤트 페이지의 룰렛 돌리기, 복권 긁기, 출석체크 등 미니게임 UI를 주도적으로 구현하여 사용자 경험 강화" },
        { id: 3-6, name: "- SCSS 변수화·모듈화, 컴포넌트 가이드 정립으로 팀 내 퍼블리싱 가이드라인 수립에 기여" },

        
      ],
    },
  ];

  const data03 = [
    {
      id: 1,
      name: "주요 업무 및 담당 역할",
      children: [
        { id: 1-1, name: "- HTML 마크업 및 CSS 스타일링 작업" },
        { id: 1-2, name: "- 기본적인 JavaScript, jQuery를 활용한 동적 기능 구현" },
        { id: 1-3, name: "- 다크모드 및 라이트모드 대응 UI 퍼블리싱" },
        { id: 1-4, name: "- WebView 기반의 In-App 연동 구조에 맞춘 퍼블리싱 구조 설계" },
        
      ],
    },
    {
      id: 2,
      name: "기술",
      children: [{ id: 2-1, name: "HTML, CSS(SCSS), JavaScript, jQuery, Git, AdobeXD" }],
    },
    {
      id: 3,
      name: "상세 성과 및 작업 내용",
      children: [
        { id: 3-1, name: "- WebView 환경 최적화: 하이브리드 앱(WebView) 환경에 맞춰 퍼블리싱 구조를 설계하고, 모바일 In-App 연동방식에 맞게 화면 구현." },
        { id: 3-2, name: "- 다크모드 / 라이트모드 대응, 큰글씨 모드 대응: 사용자 설정에 따라 다크/라이트 테마 UI 및 큰글씨 모드 구현" },
        { id: 3-3, name: "- 웹접근성 준수: 웹접근성 심사를 대비해 시맨틱 마크업, aria 속성, 키보드 접근성 등을 준수한 HTML 구조 적용 스크린 리더 호환성 개선(웹 접근성 인증 마크 획득으로 서비스의 신뢰도 및 품질 향상)" },
        { id: 3-4, name: "- 웹접근성 관련 이슈 대응: 사전 점검 및 심사 중 발견된 웹접근성 이슈를 빠르게 파악하여 수정." },
        { id: 3-5, name: "- iOS/Android 스타일 오류 디버깅: 각 OS별 WebView 환경 차이로 발생하는 CSS·렌더링 오류를 디버깅 및 수정하여 동일한 사용자 경험 제공" },
        { id: 3-6, name: "- 개발 협업 및 이슈 대응: 개발팀과의 협업을 통해 기능 구현 중 발생한 퍼블리싱/JS 관련 이슈에 대해 빠르게 수정 및 보완" },
       
      ],
    },
  ];

  const data04 = [
    {
      id: 1,
      name: "주요 업무 및 담당 역할",
      children: [
        { id: 1-1, name: "- HTML 마크업 및 SCSS 스타일 작업" },
        { id: 1-2, name: "- 그룹 멤버십 메인, 회원관리/로그인, 리워드·등급·전략패키지 등 서비스 중 리워드 등급 화면 퍼블리싱" },
        { id: 1-3, name: "- 계열사 연계 플랫폼과의 회원 관리 화면, 관리자용 직원포털, 상담직원용 화면 퍼블리싱" },
        { id: 1-4, name: "- 웹접근성 심사 기준을 준수한 시맨틱 마크업 작성" },
      ],
    },
    {
      id: 2,
      name: "기술",
      children: [{ id: 2-1, name: "HTML, CSS(SCSS), JavaScript, jQuery, Gulp, Figma" }],
    },
    {
      id: 3,
      name: "상세 성과 및 작업 내용",
      children: [
        { id: 3-1, name: "- 컴포넌트화를 통해 화면 요소의 재사용성을 높여 유지보수 효율성 향상" },
        { id: 3-2, name: "- SCSS의 mixin, function, include, 변수 선언을 활용하여 코드 작성 시간을 단축하고 가독성 개선." },
        { id: 3-3, name: "- CSS Comb 플러그인을 활용해 코드 포맷 자동 정렬 및 프로퍼티 순서 통일화  팀 내 일관된 코드 스타일 유지" },
        { id: 3-4, name: "- Gulp task runner를 사용하여 빌드 자동화 및 작업 효율성 향상" },
        { id: 3-5, name: "- 금융권 서비스의 특성에 맞춰 웹접근성 표준을 준수한 시맨틱 마크업 작성  심사 통과에 기여" },
        { id: 3-6, name: "- 코드 작성 시 캡슐화 및 확장성을 고려한 구조 설계로 향후 재사용 및 유지보수 용이성 확보" },

        
      ],
    },
  ];

  const data05 = [
    {
      id: 1,
      name: "주요 업무 및 담당 역할",
      children: [
        { id: 1-1, name: "- HTML 마크업 및 CSS 스타일링 작업" },
        { id: 1-2, name: "- jQuery 기반의 스크립트 추가 및 수정" },
        { id: 1-3, name: "- 레거시 페이지의 구조와 스타일 업데이트" },
        { id: 1-4, name: "- SVN을 활용한 소스 형상관리 및 협업" },
        { id: 1-5, name: "- alopexgird를 활용한 테이블 ui 구현" },
        
      ],
    },
    {
      id: 2,
      name: "기술",
      children: [{ id: 2-1, name: "HTML, CSS, JavaScript, jQuery, SVN, Alopex Grid, Zeplin" }],
    },
    {
      id: 3,
      name: "상세 성과 및 작업 내용",
      children: [
        { id: 3-1, name: "- 갤럭시탭 8 해상도(최소 1024px)를 기준으로 한 반응형 퍼블리싱 구현" },
        { id: 3-2, name: "- IE10, IE11, Chrome, Edge 등 다양한 브라우저 환경을 고려한 크로스 브라우징 대응" },
        { id: 3-3, name: "- HTML, CSS, JS 구조 개선을 통한 레거시 페이지 유지보수 및 성능 최적화" },
        { id: 3-4, name: "- 협업 과정에서 SVN을 활용해 버전 충돌 방지 및 코드 리뷰 진행" },
      ],
    },
  ];


  return (
    <>
      <UIHeader size="md" color="wht">S.H.LEE</UIHeader>
      <UIContent bgColor="navy">
        <UIBox.Article variant="content">
          <UIText.Header size="lg" color="white" as="h2">
            EXPERIENCE DETAIL
          </UIText.Header>

          <UIBox.Div display="flex" jContent="space-between">
            <UIBox.Div className="mb-10" style={{minWidth:"340px"}}>
              <UIParagraph
                title="현대카드"
                period="2025.01 ~"
                subTitle="현대카드 앱/웹 운영"
                desc="CMS를 통한 현대카드 웹사이트 PC/MO 버전 운영 관리"
              />
              <div className="mt-2">
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  CMS
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  크로스브라우징
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  접근성
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  다크모드
                </UIBadge>
              </div>
            </UIBox.Div>
            <UITextList.Nested nestedItems={data01}  style={{maxWidth: "650px"}}/>
          </UIBox.Div>

          <UIDivider variant="type2" margin="60px 0" />

          <UIBox.Div display="flex" jContent="space-between">
            <UIBox.Div className="mb-10" style={{minWidth:"340px"}}>
            <UIParagraph
              title="우리은행"
              period="2024.04 ~ 2024.12 (약 8개월)"
              subTitle="우리 won 뱅킹 재구축 사업"
            />
              <div>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  React
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  크로스브라우징
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  접근성
                </UIBadge>
              </div>

            </UIBox.Div>
            <UITextList.Nested nestedItems={data02} style={{maxWidth: "650px"}}/>
          </UIBox.Div>

          <UIDivider variant="type2" margin="60px 0" />

          <UIBox.Div display="flex" jContent="space-between">
            <UIBox.Div className="mb-10" style={{minWidth:"340px"}}>
            <UIParagraph
              title="농협은행"
              period="2023.08 ~ 2024.03 (약 7개월)"
              subTitle="올원뱅크 리뉴얼 구축"
            />
              <div>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  퍼블리싱
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  크로스브라우징
                </UIBadge>
              </div>
            </UIBox.Div>

            <UITextList.Nested nestedItems={data03} style={{maxWidth: "650px"}} />
          </UIBox.Div>

          <UIDivider variant="type2" margin="60px 0" />

          <UIBox.Div display="flex" jContent="space-between">
            <UIBox.Div className="mb-10" style={{minWidth:"340px"}}>
              <UIParagraph
                title="KB국민은행"
                period="2022.11 ~ 2023.07 (약 8개월)"
                subTitle="KB 국민은행 그룹 멤버십플랫폼 개발의뢰"
                desc="KB 멤버십 플랫폼 구축"
              />
              <div className="mt-2">
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  퍼블리싱
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  web view
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  gulp
                </UIBadge>
              </div>
            </UIBox.Div>

            <UITextList.Nested nestedItems={data04} style={{maxWidth: "650px"}} />
          </UIBox.Div>

          <UIDivider variant="type2" margin="60px 0" />

          <UIBox.Div display="flex" jContent="space-between">
            <UIBox.Div className="mb-10" style={{minWidth:"340px"}}>
              <UIParagraph
                title="KB국민은행"
                period="2022.07 ~ 2022.11 (약 4개월)"
                subTitle="태블릿브랜치 금융투자 상품 판매 프로세스 구축"
                desc="은행 직원이 태블릿을 사용하여 금융 업무를 처리할 수 있도록 하는 프로세스 구축"
              />
              <div className="mt-2">
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  퍼블리싱
                </UIBadge>
                <UIBadge variant="solid" bgColor="navy" size="sm">
                  크로스브라우징
                </UIBadge>
              </div>
            </UIBox.Div>
            <UITextList.Nested nestedItems={data05} style={{maxWidth: "650px"}} />
          </UIBox.Div>
        </UIBox.Article>
      </UIContent>

      <UIFooter />
      <UIScroll.TopButton/>
    </>
  );
}

export default Sub;
