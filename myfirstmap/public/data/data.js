// function pushdata(pflist) { 

//    $.post("/api/Swtool?type=list2", function(data) {
//       // alert("선호 장소를 불러오는 것에 성공했습니다. \n 예시 : "+ data.json[0].p_address)
//       for(i=0;i<data.json.length;i++){
//          pflist.push({ title : "1", content : data.json[i].p_address, date : "today", lat: parseFloat(data.json[i].p_coor_x), lng: parseFloat(data.json[i].p_coor_y)}); 
//    }
//    })
// };

var pflist = [
   {
    title: "서울",
    content : "서울 남산",
    date : "2020-07-10",
    lat : 37.550434,
    lng : 126.955350026719
   },
   {
    title: "서울",
    content : "서울 용산",
    date : "2020-07-11",
    lat : 37.531040,
    lng : 126.978978
   }

] ;

// pushdata(pflist);

// data.push(   {
//    title: "서울",
//    content : "서울 남산",
//    date : "2020-07-10",
//    lat : 37.550434,
//    lng : 126.989704
//   },
//   {
//    title: "서울",
//    content : "서울 용산",
//    date : "2020-07-11",
//    lat : 37.531040,
//    lng : 126.978978
//   }
//   );

// var preferlist = [] ;
// // data.push({ "content" : data.json[i].p_address, lat: data.json[i].p_coor_y, lng: data.json[i].p_coor_x}); 





// console.log(pflist);


// 작가 : 작가 이름, 전화번호, 테마, 요금, 카메라 브랜드 종류(canon, nikon, sony), 작가 ssn, 촬영가능주소(kakao api를 이용 검색해서 좌표 가져올 수 있게) 

// user : 이름, id, pw, 전화 번호, user ssn

// 예약 : 날짜(촬영가능날짜 고르기)

// 회원가입창(작가/사용자)