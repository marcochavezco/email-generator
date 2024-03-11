import { Heading, Img, Section, Text } from '@react-email/components';
import React from 'react';

export const Header = () => {
  return (
    <Section>
      <Img
        src={`./static/plaid-logo.png`}
        width='212'
        height='88'
        alt='Plaid'
        style={logo}
      />
      <Text style={tertiary}>Verify Your Identity TEST</Text>
      <Heading style={secondary}>
        Enter the following code to finish linking Venmo.
      </Heading>
    </Section>
  );
};

export default Header;

const logo = {
  margin: '0 auto',
};

const tertiary = {
  color: '#0a85ea',
  fontSize: '11px',
  fontWeight: 700,
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  height: '16px',
  letterSpacing: '0',
  lineHeight: '16px',
  margin: '16px 8px 8px 8px',
  textTransform: 'uppercase' as const,
  textAlign: 'center' as const,
};

const secondary = {
  color: '#000',
  display: 'inline-block',
  fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0',
  marginTop: '0',
  textAlign: 'center' as const,
};
