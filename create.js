import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TEMPLATES_FOLDER_PATH = path.resolve(
  __dirname,
  'react-component-templates',
);

// handlers
const writeComponentFile = (fileName, data, filePath) =>
  fs.writeFileSync(path.resolve(filePath, fileName), data, {
    encoding: 'utf-8',
  });

const componentNamePascalCase = process.argv[2];
const componentNameKebabCase = process.argv[2]
  .replace(/([a-z0–9])([A-Z])/g, '$1-$2')
  .toLowerCase();
const rawComponentPath = process.argv[3];

const compileTemplate = fileName =>
  fs
    .readFileSync(path.resolve(TEMPLATES_FOLDER_PATH, fileName), 'utf-8')
    .replace(/{{ComponentNamePascalCase}}/g, componentNamePascalCase)
    .replace(/{{ComponentNameKebabCase}}/g, componentNameKebabCase);

// main logic
const componentPath = path.resolve(
  'src',
  'components',
  typeof rawComponentPath === 'string' ? rawComponentPath : '',
  componentNamePascalCase,
);

const indexScript = compileTemplate('component-index-script.txt');
const component = compileTemplate('component.txt');
const baseStyle = compileTemplate('component-styles.txt');

fs.mkdirSync(path.resolve(componentPath), { recursive: true });
writeComponentFile('index.ts', indexScript, componentPath);
writeComponentFile(`${componentNamePascalCase}.tsx`, component, componentPath);
writeComponentFile(
  `${componentNamePascalCase}.module.scss`,
  baseStyle,
  componentPath,
);
