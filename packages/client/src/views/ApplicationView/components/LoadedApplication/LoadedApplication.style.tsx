import styled from 'styled-components';


export const Sidebar = styled.div`
    width: 200px;
    padding: 20px 20px;
    background: #efefef;
`;

Sidebar.displayName = "Styled.Sidebar";

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

Main.displayName = "Styled.Main";

export const Application = styled.div`
    flex: 1;
    padding: 20px 20px;
`;

Application.displayName = "Styled.Application";