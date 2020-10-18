import { Position } from 'vscode-languageserver-protocol';
import { CompletionItemBuilder } from '../../completionItemBuilder';
import { ESBaseTemplate } from './baseTemplate';

class ForTemplate extends ESBaseTemplate {
  buildCompletionItem(code: string, position: Position) {
    return CompletionItemBuilder.create('fori', code)
      .description('for i in range(100)')
      .replace(`for \${1:i} in range(\${2:{{expr}}}):\n${this.indentCharacters()}\${0}\n`, position, true)
      .build();
  }
}

class ForInTemplate extends ESBaseTemplate {
  buildCompletionItem(code: string, position: Position) {
    return CompletionItemBuilder.create('for', code)
      .description('for item in items')
      .replace(`for \${1:item} in \${2:{{expr}}}:\n${this.indentCharacters()}\${0}\n`, position, true)
      .build();
  }
}

export const build = () => [new ForTemplate(), new ForInTemplate()];
