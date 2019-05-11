import { lintHelper } from './lint-helper';

const ruleName = 'dummy-rule-boilerplate';

describe('dummy rule', () => {
  it('should not fail with wrong import order', () => {
    const sourceFile = `
      import * as React from 'react';
      import './styles.scss';
    `;

    const result = lintHelper({ sourceFile, ruleName });
    expect(result.errorCount).toBe(2);
  });
});
