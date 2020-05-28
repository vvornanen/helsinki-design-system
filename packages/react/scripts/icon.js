const chalk = require('chalk');
const fs = require('fs');

const exitError = (msg) => {
  console.log(`${chalk.red.bold('Error:')} ${chalk.italic(msg)}`);
  process.exit(1);
};

const logStep = (msg) => console.log(`${chalk.green('✓')} ${msg}`);

const createComponentFile = (templatePath, destination, name, svgData) => {
  const nameLower = name.toLowerCase();
  const nameCapital = `${name[0].toUpperCase()}${name.slice(1)}`;

  const files = fs.readdirSync(templatePath);

  const newFiles = files.map((file) => {
    const sourcePath = `${templatePath}${file}`;
    const targetPath = `${destination}/${file
      .split('NewIcon')
      .join(nameCapital)
      .split('new-icon')
      .join(nameLower)}`;

    const data = fs
      .readFileSync(sourcePath, 'utf-8')
      .split('[-replace-name-capital-]')
      .join(nameCapital)
      .split('[-replace-svg-]')
      .join(svgData);

    fs.writeFileSync(targetPath, data);
    return targetPath;
  });

  return newFiles;
};

const addExport = (name, dir) => {
  const nameCapital = `${name[0].toUpperCase()}${name.slice(1)}`;
  const exportString = `export { default as ${nameCapital} } from './${dir}/${nameCapital}';\n`;
  try {
    fs.appendFileSync('src/icons/index.ts', exportString, 'utf-8');
  } catch (error) {
    exitError(`Failed to add export to index.ts: ${error}`);
  }

  return exportString;
};

const createIcon = async () => {
  const dir = 'ui';

  fs.readdir(`../core/src/svg/${dir}`, (err, files) => {
    files.forEach((file) => {
      function toPascalCase(string) {
        return `${string}`
          .replace('.svg', '')
          .replace(new RegExp(/[-_]+/, 'g'), ' ')
          .replace(new RegExp(/[^\w\s]/, 'g'), '')
          .replace(new RegExp(/\s+(.)(\w+)/, 'g'), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
          .replace(new RegExp(/\s/, 'g'), '')
          .replace(new RegExp(/\w/), (s) => s.toUpperCase());
      }

      const name = `Icon${toPascalCase(file)}`;

      fs.readFile(`../core/src/svg/${dir}/${file}`, (_err, data) => {
        const svg = data
          .toString()
          .replace('fill-rule', 'fillRule')
          .replace('width="100%" height="100%"', 'className={className} style={style}');

        const iconFile = createComponentFile('.templates/new-icon/', `src/icons/${dir}`, name, svg);
        logStep(`${chalk.bold(`Created files:`)}\n\t${chalk.italic(iconFile.join('\n\t'))}`);

        const exportString = addExport(name, dir);
        logStep(`${chalk.bold(`Added export to src/icons/index.ts:`)}\n\t${chalk.italic(exportString)}`);
      });
    });
  });
};

createIcon();
