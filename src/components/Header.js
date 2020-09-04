import React from "react"
import styled from "styled-components"
// Components
import ThemeToggle from "./ThemeToggle"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    {siteTitle}
    <ThemeToggle />
  </HeaderWrapper>
)


export default Header
