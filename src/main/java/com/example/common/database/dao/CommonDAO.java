package com.example.common.database.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

@Repository
public class CommonDAO {

    @Autowired
    @Qualifier("firstSqlSessionTemplate")//config파일의 sqlsession 매소드 이름
    private SqlSession sqlSession;

    public String getCurrentDataTime() {
        return sqlSession.selectOne("mapper.ExampleMapper.getCurrentDateTime");
    }

    public Object selectObject(String mapperId) throws Exception {
        return this.sqlSession.selectOne(mapperId);
    }

    public Object selectObject(String mapperId, Object parameter) throws Exception {
        return this.sqlSession.selectOne(mapperId, parameter);
    }
}