import React from "react"
import styled from "styled-components"
// Components
import ThemeToggle from "./ThemeToggle"
import Title from "./Title"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-soft);
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Title>{siteTitle}</Title>
    <ThemeToggle />
  </HeaderWrapper>
)


export default Header
