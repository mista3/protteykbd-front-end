module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'react-app',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'max-len': ['error', 120],
		'capitalized-comments': 'off',
		'sort-imports': [
			'error', {
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
		'import/order': [
			1, {
				groups: [
					'external',
					'builtin',
					'internal',
					'sibling',
					'parent',
					'index',
				],
				pathGroups: [
					{
						pattern: 'components',
						group: 'internal',
					},
					{
						pattern: 'common',
						group: 'internal',
					},
					{
						pattern: 'routes/ **',
						group: 'internal',
					},
					{
						pattern: 'assets/**',
						group: 'internal',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes:
				['internal'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		indent: ['error', 'tab'],
		'react/no-array-index-key': 'error',
		'@typescript-eslint/rule-name': 'error',
		'react/jsx-first-prop-new-line': ['error','multiline'],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [
      'error',
      'tag-aligned',
    ],
	},
};
