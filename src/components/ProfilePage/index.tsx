import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton,
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
             
          <h1>Kevin Silva</h1>
          <h2>@SenhorK</h2>

          <p> 
            Jornalista e Iniciante em Dev 
          </p>

          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido (a) em 15 de Setembro de 1995
            </li>
          </ul>

        <Followage>
          <span>
            <strong>100</strong> Seguindo 
          </span>
          <span>
            <strong>200</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>

  );
}

export default ProfilePage;
