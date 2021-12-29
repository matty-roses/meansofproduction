module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    roots: [
        "packages/domain",
        "graphql-api",
    ]
};