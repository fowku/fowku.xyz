import { VariableFontParams } from '@types';

export function fontParamsToString(params: VariableFontParams): string {
  return Object.entries(params)
    .map(([name, value]) => `"${name}" ${value}`)
    .join(', ');
}
