const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            blogs: allStrapiBlog {
                nodes {
                    slug
                }
            }
            solutions: allStrapiServiceSolution {
                nodes {
                    slug
                }
            }
            projects: allStrapiProjects {
                nodes {
                    slug
                }
            }
        }
    `)

    result.data.blogs.nodes.forEach(blog => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: path.resolve(`src/templates/blog-template.js`),
            context: {
                slug: blog.slug,
            },
        })
    })

    result.data.solutions.nodes.forEach(solution => {
        createPage({
            path: `/solution/${solution.slug}`,
            component: path.resolve(`src/templates/solution-template.js`),
            context: {
                slug: solution.slug,
            },
        })
    })

    result.data.projects.nodes.forEach(project => {
        createPage({
            path: `/projects/${project.slug}`,
            component: path.resolve(`src/templates/project-template.js`),
            context: {
                slug: project.slug,
            },
        })
    })
}
