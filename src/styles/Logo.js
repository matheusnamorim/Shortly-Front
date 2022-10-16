import styled from 'styled-components';

export default function Logo({children}){
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-weight: 200;
        font-size: 64px;
        color: #000000;
    }

    img{
        width: 105px;
        height: 95px;
    }
`;