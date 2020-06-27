
interface 흑역사 {
  제조: () => void
}

class 채연 {
  제조 = () => console.log('난...ㄱㅏ 끔... 눈물을 흘린ㄷㅏ....ㄱㅏ끔은 눈물을 참을 수 없는 ㄴㅐ가 별루ㄷㅏ...')
}

class 유노윤호 implements 흑역사 {
  제조 = () => console.log('정말 잘생겼고 그리고 랩도 잘하고 손 머리부터 발끝까지 완벽해 그게 바로 Perfect 그게 바로 인생의 진리지')
}


// Exercise: Refactor the code below to make function more reusable

const 흑역사제조기 = <T extends 흑역사>(흑역사: T): void => {
  흑역사.제조();
}

// const 흑역사제조기1 = (흑역사 :유노윤호): void => {
//   흑역사.제조();
// }

// const 흑역사제조기2 = (갬성 :채연): void => {
//   갬성.제조();
// }

const exercise3 = () => {
  // Exercise: Update the function calls to utilise the refactored function
  흑역사제조기<유노윤호>(new 유노윤호());
  흑역사제조기(new 채연());
}

export default exercise3;

