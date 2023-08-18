import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'
import Result from './Result'
import { Box,ResultBox } from './styledComponents'


const Game = () => {
    const questionCount = useSelector(state => state.questionCount)
    return <>
    {questionCount === 12 ?(
    <ResultBox>
        <div style={{ textAlign: "center" }}>
        <Result /> 
        </div>
        </ResultBox>):( <Box>
        <div style={{ textAlign: "center" }}>
        <Question /> 
        </div>
    </Box>)
    }
    </>
}

export default Game