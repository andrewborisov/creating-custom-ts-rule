import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
  public static metadata: Lint.IRuleMetadata = {
    ruleName: 'dummy-rule-boilerplate',
    description: 'dummy-rule-boilerplate',
    options: null,
    optionsDescription: null,
    optionExamples: [true],
    type: 'formatting',
    typescriptOnly: false,
    hasFix: false,
    requiresTypeInfo: true,
  };

  public static FAILURE_STRING = 'FAILURE';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new Walker(sourceFile, 'dummy-rule-boilerplate', this.getOptions()));
  }
}

class Walker extends Lint.AbstractWalker<any> {
  // Basic walker method
  public walk(sourceFile: ts.SourceFile) {
    for (const statement of sourceFile.statements) {
      this.addFailureAtNode(statement, Rule.FAILURE_STRING);
    }
  }
}
