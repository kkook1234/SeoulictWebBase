import React from 'react'
import { Title, Button } from './styledComponents'
import { useDispatch } from 'react-redux'
import { Box } from './styledComponents'

const Home = () => {

    const dispatch = useDispatch()
    
    return <Box>
        <div>
        <Title>
            <h1>과자로 보는 MBTI 테스트</h1>
        </Title>
        <Button onClick={() => dispatch({ type: 'BEGIN' })}>시작하기</Button>
        <p>MADE BY Byeongguk</p>
        </div>
    </Box>
}

export default Home