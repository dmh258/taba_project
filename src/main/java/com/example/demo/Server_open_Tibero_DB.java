package com.example.demo;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.context.WebServerApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.sql.*;
import java.util.Date;


import com.example.demo.DB_handler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;


import org.json.JSONObject;

@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
@RestController
public class Server_open_Tibero_DB {

    private static final String SECRET_KEY = "TabaProjectCoworkerKimdongyoungKimchoohongYouyoungjiJinyoungYieHwangeunbiPlaceAtMediaCenterb103";
    private static final long EXPIRATION_TIME = 86400000; // 토큰 만료 시간: 24시간

    private static ConfigurableApplicationContext context;

    public static void main(String[] args) {
        context = SpringApplication.run(Server_open_Tibero_DB.class, args);
        String serverURL = getServerURL(context);
        System.out.println("Server URL: " + serverURL);
    }

    private static String getServerURL(ConfigurableApplicationContext context) {
        WebServerApplicationContext webServerAppContext = (WebServerApplicationContext) context;
        int port = webServerAppContext.getWebServer().getPort();
        return "Server URL: http://localhost:" + port;
    }

    @GetMapping("/server-url")
    public String serverURL() {
        return getServerURL(context);
    }


    @PostMapping("/user_data/in")
    public ResponseEntity<String> User_DataIn(@RequestParam("password") String user_password,
                                         @RequestParam("name") String nickname,
                                         @RequestParam("gender") String user_gender,
                                         @RequestParam("phone") String user_phone,
                                         @RequestParam("email") String user_email,
                                         @RequestParam("useryear") String useryear,
                                         @RequestParam("usermonth") String usermonth,
                                         @RequestParam("userday") String userday,
                                         @RequestHeader("Access-Control-Allow-Origin") String allowOrigin) {

        HttpHeaders headers = new HttpHeaders();
        headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        headers.set("Access-Control-Allow-Credentials", "true");
        headers.set("Access-Control-Max-Age", "3600");

        System.out.println("user_password : " + user_password);
        System.out.println("nickname : " + nickname);
        System.out.println("user_gender : " + user_gender);
        System.out.println("user_phone : " + user_phone);
        System.out.println("user_email : " + user_email);
        System.out.println("useryear : " + useryear);
        System.out.println("usermonth : " + usermonth);
        System.out.println("userday : " + userday);

        DB_handler dbHandler = new DB_handler(); // DB_handler 인스턴스 생성
        boolean success = dbHandler.Enter_user_data(user_password, nickname, user_gender, user_phone, user_email, useryear, usermonth, userday);
        System.out.println("method SignUP_Data_Sending success");
        if (success) {
            System.out.println("회원가입 데이터 입력 성공.");

            return ResponseEntity.ok()
                    .headers(headers)
                    .build();
        } else {
            // Handle the case when data insertion fails
            // Return an appropriate response
            return ResponseEntity.badRequest()
                    .headers(headers)
                    .body("Failed to insert data into the database.");
        }
    }


    @PostMapping("/user_data/check")
    public ResponseEntity<String> DataCheck(@RequestBody LoginRequest loginRequest,
                                            @RequestHeader("Access-Control-Allow-Origin") String allowOrigin)
    {

        HttpHeaders headers = new HttpHeaders();
        headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        headers.set("Access-Control-Allow-Credentials", "true");
        headers.set("Access-Control-Max-Age", "3600");

        String user_email = loginRequest.getEmail();
        String user_password = loginRequest.getPassword();

        System.out.println("password : " + user_password);
        System.out.println("email : " + user_email);

        // 데이터베이스 연결 정보
        String db_url = "jdbc:tibero:thin:@172.20.160.1:8629:tibero";
        String db_user = "dongyoung";
        String db_password = "ehd100";

        // SQL 문장
        String sql = "select *"
                + " from user_info"
                + " where user_email = '" + user_email + "'";


        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;

        try {
            // 데이터베이스 드라이버 로드
            Class.forName("com.tmax.tibero.jdbc.TbDriver");
            System.out.println("db driver load success");
            // 데이터베이스 연결
            connection = DriverManager.getConnection(db_url, db_user, db_password);
            System.out.println("db connect success");
            // SQL 문장 준비
            statement = connection.prepareStatement(sql);
            System.out.println("sql set success");

            System.out.println("sql : " + sql);
            System.out.println("url : " + db_url);
            System.out.println("user : " + db_user);
            System.out.println("password : " + db_password);
            System.out.println("statement : " + statement);

            // SQL 문장 실행
            resultSet = statement.executeQuery();

            System.out.println("executeQuery success");


            if (resultSet.next()) {
                String storedPassword = resultSet.getString("user_password");
                String user_num = resultSet.getString("user_num");
                String nickname =  resultSet.getString("nickname");
                String sex = resultSet.getString("sex");
                String user_phone = resultSet.getString("user_phone");
                String user_year = resultSet.getString("user_year");
                String user_month = resultSet.getString("user_month");
                String user_day = resultSet.getString("user_day");
                String user_email1 = resultSet.getString("user_email");

                if (storedPassword.equals(user_password)) {
                    System.out.println("비밀번호가 일치합니다.");
                    String token = generateToken(user_email);
                    System.out.println("토큰 생성 완료");

                    headers.add("Authorization", "Bearer " + token);

                    JSONObject tokenJson = new JSONObject();
                    tokenJson.put("token", token);
                    tokenJson.put("email", user_email1);
                    tokenJson.put("user_num",user_num); // user_num 추가
                    tokenJson.put("userPassword", user_password);
                    tokenJson.put("nickname", nickname);
                    tokenJson.put("sex", sex);
                    tokenJson.put("user_phone", user_phone);
                    tokenJson.put("user_year", user_year);
                    tokenJson.put("user_month", user_month);
                    tokenJson.put("user_day", user_day);


                    System.out.println(user_password)
                    ;

                    // SQL 문장 준비

                    // 비밀번호 일치 시 적절한 응답을 반환
                    return ResponseEntity.ok()
                            .headers(headers)
                            .body(tokenJson.toString());
                }
            }

            return ResponseEntity.badRequest()
                    .build();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 연결, 문장, 결과 집합 닫기
            if (resultSet != null) {
                try {
                    resultSet.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (statement != null) {
                try {
                    statement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

        // 에러가 발생한 경우 적절한 응답을 반환합니다
        return ResponseEntity.ok()
                .build();
    }

    public static class LoginRequest {
        private String email;
        private String password;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    private String generateToken(String user_email) {
        // 토큰 만료 시간 설정
        java.util.Date expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_TIME);

        // 토큰 생성
        try {
            String token = Jwts.builder()
                    .setSubject(user_email)
                    .setExpiration(expirationDate)
                    .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                    .compact();

            return token;
        } catch (JwtException e) {
            throw new TokenGenerationException("Failed to generate token.");
        }
    }

    // 토큰 생성 예외 클래스
    public static class TokenGenerationException extends RuntimeException {
        public TokenGenerationException(String message) {
            super(message);
        }
    }
}
