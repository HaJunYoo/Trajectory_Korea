## Trajectory_Korea
#### 한국의 최신 지도를 반영한 실시간 추적 aws 웹입니다
<p>
카카오와 네이버의 Geocoding API와 reversegeocoding을 이용했습니다. <br>
해당 웹은 node.js의 express ejs를 기반으로 제작이 되었습니다 <br>
</p>

#### amazon aws ---- mysql 연동
<p>
<ul>
1. routes 폴더 내 dbconnect_Module 파일 속 aws host와 port, password를 입력해서 사용하시면 됩니다.<br>
  <p><br>
    // Connection Pool 세팅<br>
const pool  = mysql.createPool({<br>
  connectionLimit: 66,<br>
  waitForConnections: true,<br>
  // ex ) host: "rea.cin.ap-northeast-2.rds.amazonaws.com",<br>
  host: "your amazon host",<br>
  port: "3306", //port name <br>
  database: 'react', //database name<br>
  user: "admin",<br>
  
  password: "your password",<br>
});<br>
  </p>
2. sql 문구는 models 폴더 내 SwToolsMapper 안에 mysql 구문을 입력해 사용하시면 됩니다. 
</ul>
</p>


![스크린샷 2022-02-23 오후 5.18.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d87c833e-87e2-404f-8c0b-7e64c0ad680b/스크린샷_2022-02-23_오후_5.18.16.png)

![스크린샷 2022-02-23 오후 5.18.23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73854494-c1f1-4ab9-b556-a79dfa60ffef/스크린샷_2022-02-23_오후_5.18.23.png)

![스크린샷 2022-02-23 오후 5.18.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/891fc841-f00c-407f-8971-695d02c5edd4/스크린샷_2022-02-23_오후_5.18.31.png)

![스크린샷 2022-02-23 오후 5.18.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e721a25-6d86-4f4d-a849-0b02d4ccc15b/스크린샷_2022-02-23_오후_5.18.38.png)

![스크린샷 2022-02-23 오후 5.18.49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/29bc8046-f505-4dcb-b6ac-2b7f1862f441/스크린샷_2022-02-23_오후_5.18.49.png)

![스크린샷 2022-02-23 오후 5.18.59.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20b8c91c-9bf8-4e84-9970-a567c4911bfb/스크린샷_2022-02-23_오후_5.18.59.png)
