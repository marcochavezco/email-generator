import { Text } from '@react-email/components'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <Text style={footer}>
    <Link
      href="https://notion.so"
      target="_blank"
      style={{ ...link, color: "#898989" }}
    >
      Notion.so
    </Link>
    , the all-in-one-workspace
    <br />
    for your notes, tasks, wikis, and databases.
  </Text>
  )
}

export default Footer;

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};