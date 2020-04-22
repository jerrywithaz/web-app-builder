module.exports = {
    client: {
        name: "Web App Builder Client",
        service: "server",
        url: "http://localhost:4000/graphql",
        addTypename: true,
        excludes: ['**/__tests__/**/*']
    }
}