import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              name
              url
            }
          }
        }
      }
    `
  )
  const socialChannels = data.site.siteMetadata.social
                  .map((value, index) => {
                    return (
                      <li key={index}
                          css={css`
                            color: pink;
                            list-style: none;
                            display: inline;
                            white-space: nowrap;
                            margin-right: 10px;
                          `}
                      >
                        <a href={value.url}>
                          {value.name}
                        </a>
                      </li>
                    )
                  })

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
      <footer>
        <ul
        css={css`
          float: left;
          margin-left: 0px;
        `}>
          {socialChannels}
        </ul>
      </footer>
    </div>
  )
} 
