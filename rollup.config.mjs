import typescript from "@rollup/plugin-typescript";

/**
 * @type {Array<import('rollup').RollupOptions>}
 */
const configurations = [
    {
        input: 'index.ts',
        plugins: [
            typescript({
                include: /\.ts$/
            })
        ],
        output: {
            file: 'dist/index.cjs',
            format: "commonjs"
        }
    },
    {
        input: 'index.ts',
        plugins: [
            typescript({
                include: '.ts$'
            })
        ],
        output: {
            file: 'dist/index.cjs',
            format: "commonjs"
        }
    },
    {
        input: 'index.ts',
        plugins: [
            typescript({
                filterRoot: '.'
            })
        ],
        output: {
            file: 'dist/index.cjs',
            format: "commonjs"
        }
    }
];

export default configurations;