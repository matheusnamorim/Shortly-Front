import styled from 'styled-components';

export default function Container({children, aligner}){
    return <Wrapper aligner={aligner}>{children}</Wrapper>
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 65vh;

    h2{
        margin-top: 30px;
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        cursor: pointer;
        color: #000000;
    }

    ${(props) => {
        if(props.aligner){
            return`
                justify-content: start;
            `;
        }
    }}
`;
