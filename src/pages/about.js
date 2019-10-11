import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const blockchainMeetup = "https://www.meetup.com/nyc-blockchain-devs/";
  const aiMeetup = "https://www.meetup.com/nyhais/";
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.title} is a public notebook for the code and musings of Anthony Albertorio.</p>
      <p>
        Anthony Albertorio is a developer and self described "artist" based in New York City. 
        He regularly meets to experts in the worlds of 
        artificial intelligence, blockchain, finance and healthcare.
      </p>
  
      <p>
        He is also the organizer of <span> </span>
        <a href={blockchainMeetup}> NYC Blockchain Devs </a> 
        and <span> </span>
        <a href={aiMeetup}>
          New York Health Artificial Intelligence Society
        </a>
      </p>
  
    </Layout>
  )
}

// Basic GraphQL query that retrieves the title in our about.js changes above is:
export const query = graphql`
  query {
    site {
      siteMetadata {
        title 
      }
    }
  }
`