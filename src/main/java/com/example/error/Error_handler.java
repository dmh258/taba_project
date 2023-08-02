package com.example.error;

import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@RestController
@ControllerAdvice
public class Error_handler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleException(Exception ex, WebRequest request) {
        // 예외 처리 로직 작성
        return new ResponseEntity<>("Error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/error")
    public ResponseEntity<Object> handleError(HttpServletRequest request) {
        // 에러 페이지 처리 로직 작성
        return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
    }
}