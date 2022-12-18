import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import CreateHabit from './CreateHabit'
import MyHabits from './MyHabits';

export default function HabitsPage() {
  return (
    <Container>
      <Header />
      <CreateHabit/>
      <MyHabits />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  
`;