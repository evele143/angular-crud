<<<<<<< HEAD
 const { pathsToModuleNameMapper } = require('ts-jest/utils');
 const { compilerOptions } = require('./tsconfig');

 module.exports = {
   preset: 'jest-preset-angular',
   roots: ['<rootDir>/src/'],
   testMatch: ['**/+(*.)+(spec).+(ts)'],
   setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
   collectCoverage: true,
   coverageReporters: ['html'],
   coverageDirectory: 'coverage/my-app',
   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
     prefix: '<rootDir>/'
   })
 };

 module.exports={
     globals:{
         'ts-jest':{
             tsconfig:'./tsconfig.spec.json',
             stringifyContentPathregex:'\\.html$',
             asTransformers:[
                 require.resolve('jest-presest-angular/InlineHtmlStripStylesTransformer')
             ]
         }
     },
     setupFilesAfterEnv:[
         '<rootDir/nodeModules@angular-builders/jest/dist/jest-config/setup.js'
     ],
     transform:{
         '^.+\\.(ts|js|html)$':'ts-jest'
     },
     testEnvi:'jest-environment-jsdon-thiertheen',
     moduleNameMapper:{
         '@core/(.*)':'<rootDir>/src/app/shared/$1'

     },
     transforIgnorPatterns:['node_modules/(?!@ngrx)'],
     collectCoverage:[
         'src/app.**/*.ts',
         '!src/app/**/*.module.ts',
         '!src/app/**/*.array.ts',
         'src/app/fragmentTypes.ts'
     ],
     moduleFileExtensions:['ts','tsx','js','json'],
     testPathIgnorePatterns:['node_module','/dist/','src/app/*.{js}'],
     snapshotsSerializers:[
         'jest-preset-angular/AngularSnapshotserializer.js',
         'jest-present-angular/HTMLcomponentSerializer.js'
     ]

   
 }


module.exports = {
    globals: {
      'ts-jest': {
        tsConfig: './tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        astTransformers: [
          require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')
        ]
      }
    },
    setupFilesAfterEnv: [
      '<rootDir>/node_modules/@angular-builders/jest/dist/jest-config/setup.js'
    ],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest'
    },
    testMatch: [
      '**/__tests__/**/*.+(ts|js)?(x)',
      '**/+(*.)+(spec|test).+(ts|js)?(x)'
    ],
    testEnvironment: 'jest-environment-jsdom-thirteen',
    moduleNameMapper: {
      '@core/(.*)': '<rootDir>/src/app/core/$1',
      '@shared/(.*)': '<rootDir>/src/app/shared/$1'
    },
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
    collectCoverageFrom: [
      'src/app/**/*.ts',
      '!src/app/**/*.module.ts',
      '!src/app/**/*.array.ts',
      '!src/app/fragmentTypes.ts'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/app/*.{js}'],
    snapshotSerializers: [
      'jest-preset-angular/AngularSnapshotSerializer.js',
      'jest-preset-angular/HTMLCommentSerializer.js'
    ]
  };
=======
module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
>>>>>>> 24648e18603b19e6ba6130b76fd10bc72b55e5f9
