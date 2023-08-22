import fs from 'fs';
import path from 'path';

const rootDir = process.argv[2] ?? path.resolve(__dirname);

const findAllMdFiles = (dirPath: string): string[] => fs
  .readdirSync(dirPath, { withFileTypes: true })
  .flatMap((file) => {
    const filePath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      return findAllMdFiles(filePath);
    }

    if (file.isFile() && filePath.endsWith('.md')) {
      return [filePath];
    }

    return [];
  });

const EXC_REGEX = /::exc\[([^\]]+)\]/g;

const excsTransform = (content: string): string => {
  return content.replaceAll(EXC_REGEX, (match) => match.replaceAll('>', '/'));
}

const solutionTransform = (content: string): string => {
  const parts = content.split('---solution');

  if (parts.length === 1) {
    return content;
  }

  const assign = parts[0].trim();
  const solution = parts[1].trim();

  return `${assign}\n\n:::solution\n\n${solution}\n\n:::\n`;
}

const transformAll = (mdFiles: string[]): void => {
  for (const file of mdFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const newContent = excsTransform(solutionTransform(content));

    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf-8');
      console.log("File updated: ", file);
    }
  }
}

const mdFiles = findAllMdFiles(rootDir);
transformAll(mdFiles);
