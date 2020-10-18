import { Position } from 'vscode-languageserver-protocol';
import { CompletionItemBuilder } from '../../completionItemBuilder';
import { ESBaseTemplate } from './baseTemplate';

export class ConsoleTemplate extends ESBaseTemplate {
  constructor(private func: 'print' | 'len') {
    super();
  }

  buildCompletionItem(code: string, position: Position) {
    return CompletionItemBuilder.create(this.func, code)
      .description(`${this.func}(expr)`)
      .replace(`${this.func}({{expr}})`, position)
      .build();
  }
}

export const build = () => [new ConsoleTemplate('print'), new ConsoleTemplate('len')];
