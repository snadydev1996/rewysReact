/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * All configuration related things are here
 * 
 * This is configuration file
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx'
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        // apiURL: process.env.DEPLOY_URL
        //   ? "https://strapi-rewy-postgres.herokuapp.com"
        //   : "http://localhost:1337",
        queryLimit: 1000,
        contentTypes : [
          "blog", 
          "service-solution",
          "projects",
        ],
        singleTypes : [
          "default-banner", 
          "solution", 
          "services-one",
          "services-two",
          "our-features",
          "aboutpagesectionone",
          "ourhistory",
          "why-choose-us",
          "how-it-work",
          "testimonials",
          "start-your-project",
          "team-style-1",
          "partner",
          "recent-projects",
          "team-style-2",
        ],
      },
    },
  ],
}
