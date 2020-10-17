import { type } from 'os';
import React from 'react';
import styled from 'styled-components';

type Props = {
  bg?: boolean;
  br?: boolean;
  tt?: boolean;
  dp?: boolean;
}

const CardWrapper = styled.div<Props>`
  background: ${({ bg }) => (bg ? '#FFF' : '#F2F2F2')};
  width: 350px;
  margin: auto;
  padding-bottom: 20px;
  border-radius: ${({ br }) => (br ? '5px' : '10px')};
  cursor: pointer;
`;

const Image = styled.img<Props>`
  width: 100%;
  height: auto;
  border-radius: ${({ br }) => (br ? '5px' : '10px')};
`;

const Title = styled.h3<Props>`
  color: ${({ tt }) => (tt ? '#1982c4' : '#999')};
  margin: 0;
  padding: 15px;
`;

const Description = styled.p<Props>`
  color: ${({ dp }) => (dp ? '#999' : '#1982c4')};
  margin: 0;
  padding: 0px 15px;
`;

interface CardProp {
  image: string,
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProp) {
  return (
    <CardWrapper bg>
      <Image src={image} alt={title} br />
      <Title tt>{title}</Title>
      <Description dp>{description}</Description>
    </CardWrapper>
  )
}

export default Card;