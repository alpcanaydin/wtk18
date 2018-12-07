import React from 'react';
import { Link } from 'react-router-dom';

import styled from '../../theme';

import { Container, H2, List } from '../../components';

const Wrapper = styled.div`
  margin: 32px 0;
`;

const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  color: ${props => props.theme.bodyColor};
  text-decoration: none;
  margin-right: 16px;

  :hover {
    text-decoration: underline;
  }
`;

const Home = () => (
  <Wrapper>
    <Container>
      <List>
        <StyledSection>
          <H2>Manipülasyon</H2>

          <StyledLink to="/manipulasyon/gecikmeli-loading">Gecikmeli Loading</StyledLink>
        </StyledSection>

        <StyledSection>
          <H2>Görsellik</H2>

          <StyledLink to="/gorsellik/spinner-yerine-placeholder">
            Spinner Yerine Placeholder
          </StyledLink>
          <StyledLink to="/gorsellik/ilgili-ui-guncellemesi">
            Router Sayesinde İlgili UI Güncellemesi
          </StyledLink>
        </StyledSection>

        <StyledSection>
          <H2>Optimizm</H2>

          <StyledLink to="/optimizm/optimistik-ui-guncellemesi">
            Optimistik UI Güncellemesi
          </StyledLink>
        </StyledSection>

        <StyledSection>
          <H2>Bekleme Tasarrufu</H2>

          <StyledLink to="/bekleme-tasarrufu/responselarin-cachelenmesi">
            Response’ların Cache’lenmesi
          </StyledLink>
          <StyledLink to="/bekleme-tasarrufu/hover-prefetch">Hover Prefetch</StyledLink>
          <StyledLink to="/bekleme-tasarrufu/n1-load-more">N+1 Load More</StyledLink>
          <StyledLink to="/bekleme-tasarrufu/async-fetch">
            Daha Az Önemli Data’nın Asenkron Çekilmesi
          </StyledLink>
        </StyledSection>

        <StyledSection>
          <H2>Bandwith & Initial Loading Tasarrufu</H2>

          <StyledLink to="/bandwith-tasarrufu/code-splitting">Code Splitting</StyledLink>
        </StyledSection>
      </List>
    </Container>
  </Wrapper>
);

export default Home;
