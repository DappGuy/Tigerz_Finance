import React  from 'react';
import {
  Container,
  Column,
  Title,
  Link,
  FAIcon,
  BrandIcon,
  LinkLabel,
} from './style';

const Footer = () => {
  return (
    <Container>
    <Column>
        <Link href="https://twitter.com/TigerFi" target="_blank">
          <BrandIcon type='twitter' />
          <LinkLabel>twitter</LinkLabel>
        </Link>
        <Link href="https://t.me/TigerFi" target="_blank">
          <BrandIcon type='telegram' />
          <LinkLabel>telegram</LinkLabel>
        </Link>
        <Link href="https://discord.gg/9xfMvJY" target="_blank">
          <LinkLabel></LinkLabel>
        </Link>
      </Column>
    </Container>
  );
}

export default Footer;
