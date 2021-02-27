import React from 'react';
import {CardDiv, 
        Text, 
        TableDiv, 
        Table,  
        TableRow, 
        TableData, 
        TextStyle, 
        ScoreStyle, 
        Divider} from './style';
import NextButton from '../Button/Next';
import {ButtonDiv} from './style'

const HistoryCard =()=> {
    const Data = [
        {
            "id": 1,
            "category": "Sports",
            "score": "10/10"
        },
        {
            "id": 2,
            "category": "Science",
            "score": "10/10"
        },
        {
            "id": 3,
            "category": "Geography",
            "score": "10/10"
        },
        {
            "id": 4,
            "category": "Film and TV",
            "score": "10/10"
        },
        {
            "id": 5,
            "category": "History",
            "score": "10/10"
        },
        {
            "id": 6,
            "category": "Music",
            "score": "10/10"
        },
        {
            "id": 7,
            "category": "General Knowledge",
            "score": "10/10"
        }  
    ]
    return (
        <CardDiv>
            <Text>Quiz History</Text>
            <TableDiv>
                <Table>
                    <tbody>
                        <TableRow>
                            <TableData>
                                <TextStyle color="#42366D" weight="600">Quiz Category</TextStyle>
                            </TableData>
                            <TableData>
                                <TextStyle style={{marginLeft:"120px"}}color="#686868" weight="600">Scores</TextStyle>
                            </TableData>
                        </TableRow>
                        
                            {Data.map((item)=>(
                                <>
                                <Divider/>
                                <TableRow
                                key = {`${item.id}`}>
                                    <TableData>
                                        <TextStyle color="#42366D" weight="500">{item.category}</TextStyle>
                                    </TableData>
                                    <TableData>
                                        <TextStyle style={{marginLeft:"140px"}} color="#686868" weight="500">{item.score}</TextStyle>
                                    </TableData>
                                </TableRow> 
                                </>
                                     
                            ))}
                        
                    </tbody>
                </Table>     
            </TableDiv>
            <ButtonDiv>
            <NextButton text="New Challenge"></NextButton>
            </ButtonDiv>   
        </CardDiv>
    )
}

export default HistoryCard