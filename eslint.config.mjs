import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const nextConfig = require('eslint-config-next/core-web-vitals')
const nextTypescript = require('eslint-config-next/typescript')

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [...nextConfig, ...nextTypescript]

export default eslintConfig
