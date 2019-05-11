import { Linter, Configuration } from 'tslint';
import * as TSLintConfig from '../tslint.json';

export const lintHelper = ({ sourceFile, ruleName }: { sourceFile: string, ruleName: string }) => {
  const lint = new Linter( { fix: false });

  const getRuleOptions = TSLintConfig.rules[ruleName];
  lint.lint('', sourceFile, Configuration.parseConfigFile({
    rules: {
      [ruleName]: Array.isArray(getRuleOptions) ? [...getRuleOptions] : getRuleOptions,
    },
    rulesDirectory: TSLintConfig.rulesDirectory,
  }));

  return lint.getResult();
};

export const getErrorLine = (failures: any[]) => {
  return failures.map((failure) => {
    const start = failures[0].startPosition.position;
    const end = failures[0].endPosition.position;
    return failure.sourceFile.text.substr(start, failure.sourceFile.text.length - end);
  });
};
