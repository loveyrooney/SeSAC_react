// @ts-check

const arr = [1,2,3,4,5];
//console.log(arr);
//console.log(...arr);


/*const copyArr = arr;
console.log(copyArr);
console.log(copyArr === arr);
이렇게 하면 아예 메모리 주소가 복사되서 같은것이 되어버림*/

const copyArr = [...arr];
console.log(copyArr);
console.log(arr == copyArr); 
//이렇게 해야 메모리 주소가 다른 새 배열에 값만 복사가 됨*/

const obj = {pororo: '뽀로로', lupy:'루피', crong: '크롱'}
const copyobj = {...obj};
console.log(copyobj);
console.log(obj == copyobj);
const updateobj = {...obj, lupy:'lupy'};
console.log(updateobj);

/* 전개 연산자 활용 방법
사본 만들기 : {...obj}
특정값 변경 : {...obj, 특정키:'변경값'}
함수의 파라미터 많을 때 function(a,b,...rest){} : 앞에만 추가하고 나머지 똑같이 하고 싶은 경우 */