import styled from 'styled-components';

export default function Container({children}){
    return <Wrapper>{children}</Wrapper>
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
