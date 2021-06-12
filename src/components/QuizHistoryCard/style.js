import styled from 'styled-components';

export const CardDiv = styled.div`
    width: 542px;
    display: inline-block;
    background: #FFFFFF;
    box-shadow: 10.7653px 10.7653px 21.5307px rgba(107, 127, 153, 0.02), -12.3265px 12.3265px 24.6531px rgba(107, 127, 153, 0.02);
    border-radius: 5px; 
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 71px;
    margin-bottom: 151px;
`

export const Text = styled.div`
    width: 163px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #42366D;
    margin: 0 auto;
    margin-top: 50px;
`
export const TableDiv = styled.div`
    width: 433px;
    display: inline-block;
    background: rgba(194, 194, 255, 0.3);
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 29px;
`
export const ButtonDiv = styled.div`
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 84px;
`
export const Table = styled.table`
    width: 363px;
    height: 100%;
    margin-left: 30px;
    margin-top: 37px;
    margin-bottom: 3px;
    border-collapse: collapse;
`
   
export const TableRow = styled.tr`
    width: 100%;
    display: flex;   
`
export const TableData = styled.td`
    display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	height: 70px;

	word-break: break-all;
`

export const TextStyle = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: ${props => props.weight};
    font-size: 16px;
    line-height: 20px;
    color: ${props => props.color};
`
export const Divider = styled.div`
    width: 363px;
    height: 1px;
    background: #D5D5D5;
`