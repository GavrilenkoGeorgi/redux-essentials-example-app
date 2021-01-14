module.exports = {
	'extends': 'react-app',
	'rules' : {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'max-len': [ 'error', { 'code': 120 } ],
		'indent': [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'unix' ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'never' ],
		'eqeqeq': 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-spacing': [ 'error', { 'before': true, 'after': true }
		],
	}
}
