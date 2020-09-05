import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// Components
import Layout from "../components/Layout"

const MainSection = styled.section`
  width: 100%;
  padding: 2rem;
  margin: 2rem 0;
  background-color: var(--color-background2);
`

const MadeBy = styled.a`
  color: var(--color-title);
  font-size: 1.2rem;
  float: right;
`

const IndexPage = () => (
  <Layout>
    <MainSection>
      <h1>Hello there!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </MainSection>
    <div>
      <Link to="/page-2/">Go to page 2</Link>
      <MadeBy href="https://peakd.com/@angelgarz/" target="_blank">@angelgarz</MadeBy>
    </div>
  </Layout>
)

export default IndexPage
