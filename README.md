## Trajectory_Korea
#### 한국의 최신 지도를 반영한 실시간 추적 aws 웹입니다
<p>
카카오와 네이버의 Geocoding API와 reversegeocoding을 이용했습니다. <br>
해당 웹은 node.js의 express ejs를 기반으로 제작이 되었습니다 <br>
</p>
<p>
**amazon aws ---- mysql 연동** 
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
