import { ESLint } from 'eslint';
(async function lint() {
  const linter = new ESLint()
  const formatter = await linter.loadFormatter("stylish")
  const raw = await linter.lintFiles(["./**/**/*.ts"]);
  const results = formatter.format(raw);
  console.log(results);
})().catch((error) => {
  process.exitCode = 1;
	console.error(error);
};
