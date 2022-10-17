import styled from 'styled-components';

const Logo = styled.div`
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

const Trophy = styled.div`
    display: flex;
    align-items: center;

    p{
        font-size: 36px;
        font-weight: 700;
        color: #000000;
    }
    img{
        width: 56px;
        height: 50px;
        margin-right: 10px;
    }
`;

export { Logo, Trophy };