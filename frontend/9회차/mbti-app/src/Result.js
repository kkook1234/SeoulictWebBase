import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title, Button } from './styledComponents'
import { resultcontent } from './utilities/resultcontents'

const Result = () => {
    const dispatch = useDispatch()
    const ePoint = useSelector(state => state.ePoint)
    const sPoint = useSelector(state => state.sPoint)
    const tPoint = useSelector(state => state.tPoint)
    const jPoint = useSelector(state => state.jPoint)

    const [ resultCharacter, setCharacter ] = useState({})

    useEffect(() => {
        let result = ""
        result += ePoint > 0 ? "E" : "I"
        result += sPoint > 0 ? "S" : "N"
        result += tPoint > 0 ? "T" : "F"
        result += jPoint > 0 ? "J" : "P"

        const finalResult = resultcontent.filter(content => {
            return content.type === result
        })
        setCharacter(...finalResult)
    }, [])

    return <div>
    <Title>
        <img src={resultCharacter.imgpath}style={{width:'300px',height:'300px',marginBottom:'50px'}}></img>
        <h2>{resultCharacter.type}</h2>
        <p>{resultCharacter.description}</p><br/>
        <p>mbti는 틀려도 "{resultCharacter.name}" 좋아하시죠..?</p><br/>
    </Title>
    <Button onClick={() => dispatch({ type: "RESET" }) }>다시 하기</Button>
    </div>
}

export default Result