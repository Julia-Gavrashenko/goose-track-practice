import {
  WelcomeContainer,
  WelcomeField,
  WelcomeSubTitle,
  WelcomeTitle,
} from './WelcomePage.styled';
import FeedbackForm from 'components/FeedbackModal/FeedbackForm';

export const WelcomePage = () => {
  return (
    <>
  
    <WelcomeContainer>
      <WelcomeField>
        <WelcomeTitle>PHONEBOOK</WelcomeTitle>
        <WelcomeSubTitle>- your personal contact-manager app -</WelcomeSubTitle>
      </WelcomeField>
    </WelcomeContainer>
      <FeedbackForm />
        </>
  );
};
