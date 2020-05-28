const chalk = require('chalk');
const fs = require('fs');

const logStep = (msg) => console.log(`${chalk.green('✓')} ${msg}`);

const createComponentFile = (templatePath, destination, fileName) => {
  const name = fileName.replace('.svg', '');
  const files = fs.readdirSync(templatePath);

  const newFiles = files.map((file) => {
    const sourcePath = `${templatePath}${file}`;
    const targetPath = `${destination}/icon-${name}.css`;

    // console.log('fileName', fileName);
    // console.log('file', file);
    // console.log('name', name);
    // console.log('sourcePath', sourcePath);
    // console.log('targetPath', targetPath);

    const data = fs
      .readFileSync(sourcePath, 'utf-8')
      .split('[-replace-file-name-]')
      .join(fileName)
      .split('[-replace-name-]')
      .join(name);

    fs.writeFileSync(targetPath, data);
    return targetPath;
  });

  return newFiles;
};

const addExport = (name, dir) => {
  const exportString = `@import "${dir}/icon-${name}.css";\n`;
  try {
    fs.appendFileSync('src/icons/all.css', exportString, 'utf-8');
  } catch (error) {
    exitError(`Failed to add @import to all.css: ${error}`);
  }

  return exportString;
};

const createIcon = async () => {
  ['some', 'ui'].forEach((dir) => {
    fs.readdir(`src/svg/${dir}`, (err, files) => {
      files.forEach((file) => {
        const iconFile = createComponentFile('.templates/new-icon/', `src/icons/${dir}`, file);
        logStep(`${chalk.bold(`Created files:`)}\n\t${chalk.italic(iconFile.join('\n\t'))}`);

        const exportString = addExport(file.replace('.svg', ''), dir);
        logStep(`${chalk.bold(`Added export to src/icons/all.css:`)}\n\t${chalk.italic(exportString)}`);
      });
    });
  });
};

createIcon();
