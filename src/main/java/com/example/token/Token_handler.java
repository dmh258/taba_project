package com.example.token;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;


public class Token_handler {
    private static final String SECRET_KEY = "your-secret-key";
    private static final long EXPIRATION_TIME = 86400000; // 토큰 만료 시간: 24시간


/*    public ResponseEntity<String> DataCheck(@RequestBody Data_Processing.LoginRequest loginRequest,
                                            @RequestHeader("Access-Control-Allow-Origin") String allowOrigin) {

                // 토큰 생성
                String token = generateToken(user_email);

                // 토큰을 응답에 담아 반환
                return ResponseEntity.ok()
                        .headers(headers)
                        .body(token);
            }
*/
    private String generateToken(String userEmail) {
        // 토큰 만료 시간 설정
        Date expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_TIME);

        // 토큰 생성
        String token = Jwts.builder()
                .setSubject(userEmail)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();

        return token;
    }
}
