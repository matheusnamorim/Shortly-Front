import styled from 'styled-components';

export default function Container({children}){
    return <Wrapper>{children}</Wrapper>
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
