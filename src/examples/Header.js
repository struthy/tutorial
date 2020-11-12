import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  //   const data = useStaticQuery(getData)

  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>Title: {data.site.siteMetadata.title}</h1>
      <h2>Name: {data.site.siteMetadata.person.name}</h2> */}

      <h1>title: {title}</h1>
      <h2>name: {name}</h2>
    </div>
  )
}

export default Header
