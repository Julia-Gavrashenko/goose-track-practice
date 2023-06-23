import {
  WelcomeContainer,
  WelcomeField,
  WelcomeSubTitle,
  WelcomeTitle,
} from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <WelcomeField>
        <WelcomeTitle>PHONEBOOK</WelcomeTitle>
        <WelcomeSubTitle>- your personal contact-manager app -</WelcomeSubTitle>
      </WelcomeField>
    </WelcomeContainer>
  );
};
