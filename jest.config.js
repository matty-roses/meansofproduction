module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    roots: [
        "packages/domain",
        "apps/graphql-api",
    ]
};