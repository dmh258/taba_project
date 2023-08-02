package com.example.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.Statement;
import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@RestController
public class Server_open_Mysql {

    public int user_num = 1;

    public boolean Enter_user_data(String user_password, String nickname, String user_gender, String user_phone, String user_email, String useryear, String usermonth, String userday) {
        // 데이터베이스 연결 정보
        String db_url = "jdbc:mysql://localhost:3306/my_db"; // 데이터베이스 이름과 포트에 맞게 수정
        String db_user = "root"; // MySQL 사용자 이름에 맞게 수정
        String db_password = "ehd100"; // MySQL 비밀번호에 맞게 수정

        // SQL 문장
        String user_info_in = "INSERT INTO user_info(user_num, user_password, nickname," +
                " sex, user_phone, user_email," +
                "user_year, user_month, user_day)"
                + " VALUES(" + user_num + ",'" + user_password + "','" + nickname + "',"
                + "'" + user_gender + "','" + user_phone + "','" + user_email + "',"
                + "'" + useryear + "','" + usermonth + "','" + userday + "')";

        String diag_result_in = "INSERT INTO diag_result (user_num) VALUES (" + user_num + ")";

        Connection connection = null;
        PreparedStatement statement = null;

        try {
            // JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("JDBC 드라이버 로드 성공");
            // 데이터베이스 연결
            connection = DriverManager.getConnection(db_url, db_user, db_password);
            System.out.println("MySQL 데이터베이스 연결 성공");
            // 자동 커밋 비활성화
            connection.setAutoCommit(false);


            // SQL 문장 준비
            statement = connection.prepareStatement(user_info_in);
            System.out.println("SQL 문장 준비 성공");
            System.out.println("SQL 데이터 준비 성공");
            System.out.println("SQL : " + user_info_in);
            System.out.println("URL : " + db_url);
            System.out.println("User : " + db_user);
            System.out.println("Password : " + db_password);
            // SQL 문장 실행
            statement.executeUpdate(user_info_in);

            statement = connection.prepareStatement(diag_result_in);
            System.out.println("SQL 준비 성공");

            statement.executeUpdate(diag_result_in);
            // 트랜잭션 커밋
            connection.commit();
            user_num++;

            return true;
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 연결과 문장 닫기
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

        // 데이터 삽입 실패
        return false;
    }


    public boolean Change_user_data(String user_password, String nickname, String user_gender, String user_phone, String user_email, String useryear, String usermonth, String userday) {
        // 데이터베이스 연결 정보
        String db_url = "jdbc:mysql://localhost:3306/my_db"; // 데이터베이스 이름과 포트에 맞게 수정
        String db_user = "root"; // MySQL 사용자 이름에 맞게 수정
        String db_password = "ehd100"; // MySQL 비밀번호에 맞게 수정

        // SQL 문장
        String user_info_change = "UPDATE user_info "
                + "SET user_password = '" + user_password + "', "
                + "nickname = '" + nickname + "', "
                + "sex = '" + user_gender + "', "
                + "user_phone = '" + user_phone + "', "
                + "user_email = '" + user_email + "', "
                + "user_year = '" + useryear + "', "
                + "user_month = '" + usermonth + "', "
                + "user_day = '" + userday + "'";


        Connection connection = null;
        PreparedStatement statement = null;

        try {
            // JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("JDBC 드라이버 로드 성공");
            // 데이터베이스 연결
            connection = DriverManager.getConnection(db_url, db_user, db_password);
            System.out.println("MySQL 데이터베이스 연결 성공");
            // 자동 커밋 비활성화
            connection.setAutoCommit(false);


            // SQL 문장 준비
            statement = connection.prepareStatement(user_info_change);
            System.out.println("sql set success");
            System.out.println("sql data set success");
            System.out.println("sql : " + user_info_change);
            System.out.println("url : " + db_url);
            System.out.println("user : " + db_user);
            System.out.println("password : " + db_password);
            // SQL 문장 실행
            statement.executeUpdate(user_info_change);

            // 트랜잭션 커밋
            connection.commit();

            return true;
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 연결과 문장 닫기
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

        // Data insertion failed
        return false;
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping("/user_data/out")
    public ResponseEntity<User> Out_user_data(@RequestParam("user_num") String user_num) {
        // 데이터베이스 연결 정보
        String db_url = "jdbc:mysql://localhost:3306/my_db"; // 데이터베이스 이름과 포트에 맞게 수정
        String db_user = "root"; // MySQL 사용자 이름에 맞게 수정
        String db_password = "ehd100"; // MySQL 비밀번호에 맞게 수정

        System.out.println("pre sql_set");
        // SQL 문장

        String out_user_data = "SELECT * FROM user_info WHERE token = '" + user_num + "'";



        System.out.println("sql_set success");

        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;

        try {
            // JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("JDBC 드라이버 로드 성공");
            // 데이터베이스 연결
            connection = DriverManager.getConnection(db_url, db_user, db_password);
            System.out.println("MySQL 데이터베이스 연결 성공");
            // 자동 커밋 비활성화
            connection.setAutoCommit(false);


            // SQL 문장 준비
            statement = connection.prepareStatement(out_user_data);
 //           statement.setString(1, token);
            System.out.println("sql set success");

            System.out.println("sql set success");
            System.out.println("sql data set success");
            System.out.println("sql : " + out_user_data);
            System.out.println("url : " + db_url);
            System.out.println("user : " + db_user);
            System.out.println("password : " + db_password);

            resultSet = statement.executeQuery();

            if (resultSet.next()) {
                // 결과에서 사용자 데이터 추출
                String user_password = resultSet.getString("user_password");
                String nickname = resultSet.getString("nickname");
                String user_gender = resultSet.getString("user_gender");
                String user_phone = resultSet.getString("user_phone");
                String user_email = resultSet.getString("user_email");
                String useryear = resultSet.getString("useryear");
                String usermonth = resultSet.getString("usermonth");
                String userday = resultSet.getString("userday");

                System.out.println("user_password : " + user_password);
                System.out.println("nickname : " + nickname);
                System.out.println("user_gender: " + user_gender);
                System.out.println("user_phone : " + user_phone);
                System.out.println("user_email : " + user_email);
                System.out.println("useryear : " + useryear);
                System.out.println("usermonth : " + usermonth);
                System.out.println("userday : " + userday);

                // User 객체 생성하여 데이터 설정
                User user = new User();
                user.setUserPassword(user_password);
                user.setNickname(nickname);
                user.setUserGender(user_gender);
                user.setUserPhone(user_phone);
                user.setUserEmail(user_email);
                user.setUseryear(useryear);
                user.setUsermonth(usermonth);
                user.setUserday(userday);

                return ResponseEntity.ok().body(user);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
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
            // 데이터를 찾지 못한 경우 null 반환
            return ResponseEntity.notFound().build();
        }
    }
        public class User {
        private String userPassword;
        private String nickname;
        private String userGender;
        private String userPhone;
        private String userEmail;
        private String useryear;
        private String usermonth;
        private String userday;

        // Getter 메소드
        public String getUserPassword() {
            return userPassword;
        }

        public String getNickname() {
            return nickname;
        }

        public String getUserGender() {
            return userGender;
        }

        public String getUserPhone() {
            return userPhone;
        }

        public String getUserEmail() {
            return userEmail;
        }

        public String getUseryear() {
            return useryear;
        }

        public String getUsermonth() {
            return usermonth;
        }

        public String getUserday() {
            return userday;
        }

        // Setter 메소드
        public void setUserPassword(String userPassword) {
            this.userPassword = userPassword;
        }

        public void setNickname(String nickname) {
            this.nickname = nickname;
        }

        public void setUserGender(String userGender) {
            this.userGender = userGender;
        }

        public void setUserPhone(String userPhone) {
            this.userPhone = userPhone;
        }

        public void setUserEmail(String userEmail) {
            this.userEmail = userEmail;
        }

        public void setUseryear(String useryear) {
            this.useryear = useryear;
        }

        public void setUsermonth(String usermonth) {
            this.usermonth = usermonth;
        }

        public void setUserday(String userday) {
            this.userday = userday;
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/user_data/change")
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
        boolean success = dbHandler.Change_user_data(user_password, nickname, user_gender, user_phone, user_email, useryear, usermonth, userday);
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
}