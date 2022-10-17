import styled from 'styled-components';

export default function NavBar({children}){
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    padding-right: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    div{
    display: flex;
    }
    
    p{
        margin-right: 25px;
        font-size: 14px;
        font-weight: 400;
        color: #5D9040;
        cursor: pointer;
    }
    h1{
        color: #9C9C9C;
        margin-right: 25px;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
    }
`;