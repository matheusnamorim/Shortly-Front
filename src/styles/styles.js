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

const Ranking = styled.div`
    width: 70%;
    padding: 20px 40px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

    p{
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 400;
        color: #000000;
    }
`;

export { Logo, Trophy, Ranking };