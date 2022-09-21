module.exports = {
	env: { browser: true,
		es2021: true },
	extends: [ 'plugin:react/recommended', 'xo' ],
	overrides: [ { extends: [ 'xo-typescript' ],
		files: [ '*.ts', '*.tsx' ] } ],
	parserOptions: { ecmaVersion: 'latest',
		sourceType: 'module' },
	plugins: [ 'react' ],
	rules: {
		'max-len': [ 2, 120 ],
		'capitalized-comments': 'off',
		'object-curly-newline': [ 2, {
			ObjectExpression: { minProperties: 3 },
			ObjectPattern: { minProperties: 3 },
			ImportDeclaration: { minProperties: 3 },
			ExportDeclaration: { minProperties: 3 },
		} ],
		'object-property-newline': [ 2, { allowAllPropertiesOnSameLine: true } ],
		'object-curly-spacing': [ 2, 'always' ],
		'array-bracket-newline': [ 2, { minItems: 3 } ],
		'array-element-newline': [ 2, { ArrayExpression: { minItems: 3 },
			ArrayPattern: { minItems: 3 } } ],
		'array-bracket-spacing': [ 2, 'always' ],
		'react/jsx-curly-spacing': [ 2, { when: 'always', children: true } ],
		'react/jsx-first-prop-new-line': [ 2, 'multiline' ],
		'react/jsx-newline': [ 2, { prevent: true } ],
		'react/jsx-curly-newline': [ 2, { multiline: 'forbid', singleline: 'forbid' } ],
	},
};
