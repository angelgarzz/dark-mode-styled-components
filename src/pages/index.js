import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// Components
import Layout from "../components/Layout"

const MainSection = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: var(--color-background2);
`

const IndexPage = () => (
  <Layout>
    <MainSection>
      <h1>Hello there!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </MainSection>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
