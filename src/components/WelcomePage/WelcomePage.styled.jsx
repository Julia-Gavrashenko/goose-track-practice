import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeField = styled.div`


  min-height: calc(100vh - 150px);
  width: 900px;
  padding: 20px;
  background: #c1d3e0;
  border-radius: 5px;
  box-shadow: -6px -6px 14px rgba(252, 253, 253, 0.8),
    -6px -6px 10px rgba(253, 253, 253, 0.2), 6px 6px 8px rgba(69, 68, 68, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
`;

export const WelcomeTitle = styled.h1`
text-align: center;
margin-top: 80px;


  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  color: #fdfdfd;
  text-shadow: 8px 8px 12px rgba(0, 0, 0, 0.5),
    -8px -8px 12px rgba(119, 91, 39, 0.05);
  outline: none;
`


export const WelcomeSubTitle = styled.h1`
text-align: center;
margin-top: 80px;


  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  color: #fdfdfd;
  text-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5),
    -5px -5px 12px rgba(119, 91, 39, 0.05);
  outline: none;
`
