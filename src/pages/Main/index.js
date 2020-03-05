import React from 'react';

import { Title } from './styles';

export default function Main() {
  return (
    <>
      <Title error>
        Main<small>Subtitle</small>
      </Title>
      <Title>
        Main<small>Subtitle</small>
      </Title>
    </>
  );
}
