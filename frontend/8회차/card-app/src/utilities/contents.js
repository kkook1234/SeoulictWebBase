import { createStore } from 'redux';
//카드 개별 항목에 대한 내용을 담은 배열
//detail : 상세 페이지에 담고 싶은 내용을 객체 리터럴로 표현한 키
const contents = [
  { 
    path:"/tw",
    imagePath: `${process.env.PUBLIC_URL}/image/서태웅.jfif`,
    title: "서태웅",
    character: "11",
    detail: ["서태웅","등번호: 11번","신체: 187cm, 75kg","포지션: 스몰 포워드",'"어떤 녀석이라도 내 잠을 깨우는 건 용서할 수 없다."',
  '"뭘 그렇게 쫄고 있냐? 전혀 너답지 않잖아."','"죽을힘을 다해 따라붙어라! 교체 당하고 싶지 않으면."','"오늘도 그거 해요... 우리들은... 말이에요."']
  },{ 
    path:"/bh",
    imagePath: `${process.env.PUBLIC_URL}/image/강백호.jfif`,
    title: "강백호",
    character: "10",
    detail: ["강백호","등번호: 10번","신체: 189.2cm, 83kg","포지션: 파워 포워드, 센터",'"난 농구를 할 거야. 난 바스켓맨이니까!"',
    '"정말 좋아합니다. 이번엔 거짓이 아니라구요."','"왼손은 거들 뿐."','"영감님의 영광의 시대는 언제였죠? 국가대표였을 때였나요?   난 지금입니다!"']
  },{ 
    path:"/ts",
    imagePath:  `${process.env.PUBLIC_URL}/image/송태섭.jfif`,
    title: "송태섭",
    character: "7",
    detail: ["송태섭","등번호: 7번","신체: 168cm, 59kg","포지션: 포인트 가드",'"저 녀석을 쓰러뜨리고 내가 톱이 된다!"',
    '"나 정도는 언제든지 블로킹 할 수 있을거라 생각했냐?"','"정신 차리지 못해!! 흐름은 우리 스스로 가져오는거야!!"','"내가 새 주장 송태섭이다! 알겠지!"']
  },{ 
    path:"/dm",
    imagePath: `${process.env.PUBLIC_URL}/image/정대만.jfif`,
    title: "정대만",
    character: "14",
    detail: ["정대만","등번호: 14번","신체: 184cm, 70kg","포지션: 스윙맨, 슈팅 가드",'"안 선생님...!! 농구가 하고 싶어요...."',
    '"나는 누구지? 내 이름을 말해 봐라."','"그래, 난 정대만. 포기를 모르는 남자지…."','"고요하다. 이 소리가.... 날 되살아나게 한다. 몇 번이라도...."']
  },{ 
    path:"/cs",
    imagePath: `${process.env.PUBLIC_URL}/image/채치수.jfif`,
    title: "채치수",
    character: "4",
    detail: ["채치수","등번호: 4번","신체: 197cm, 90kg","포지션: 센터",'"신발 벗어."',
    '"뼈가 부러져도 좋다... 걸을 수 없게 되어도 좋다...!! 간신히 잡은 찬스다...!!"','"결승리그는 지금 막 시작했을 뿐이야. 울지마라."','" 으...응."']
  },
]
//이 앱에서는 상태에 대한 변경(수정 및 삭제)을 진행하지 않는다.
function reducer(state, action) {
  return { contents } ;
}
//리듀서:상태 관리 담당 함수
//리듀서를 전달받아서 저장소를 생성하는 함수가 바로 createstore
export const store = createStore(reducer);