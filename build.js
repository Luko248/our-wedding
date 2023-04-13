import esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

// output path for generated files
const outputPath = './wwwroot';

const args = process.argv.slice(2);
const watch = args.includes('--watch');

//Custom watch plugin
const watchPlugin = {
    name: 'watch-plugin',
    setup(build) {
        build.onStart(() => { console.log('\x1b[0m', 'Build starting') });
        build.onEnd((result) => {
            if (result.errors.length > 0) {
                console.log('\x1b[31m', `[${new Date(Date.now()).toLocaleTimeString()}] Build finished with errors: ${result.errors}`);
            } else {
                console.log('\x1b[32m', `[${new Date(Date.now()).toLocaleTimeString()}] Build finished successfully!`);
            }
        });
    }
};
async function main() {

    try {
        // build SCSS
        console.log('\x1b[0m', 'Compiling SCSS...');
        await esbuild.build({
            entryPoints: ['./Resources/scss/style.scss'],
            outfile: `${outputPath}/css/style.css`,
            plugins: [
                sassPlugin({
                    async transform(source) {
                        const { css } = await postcss([autoprefixer, postcssPresetEnv({
                            stage: 1,
                            features: {
                                "cascade-layers": false
                            }
                        })]).process(source, { from: undefined })
                        return css
                    }
                }),
                watchPlugin
            ],
            bundle: true,
            external: ['*.ttf', '*.eot', '*.eot?#iefix', '*.woff', '*.otf', '*.svg', '*.svg?#webfont', '*.jpg', '*.jpeg', '*.png', '*.webp', '*.avif'],
            minify: true
        });

        // build TypeScript
        console.log('\x1b[0m', 'Compiling TypeScript...');
        await esbuild.build({
            entryPoints: ['./Resources/scripts/init.ts'],
            outfile: `${outputPath}/js/init.js`,
            minify: true
            // watch: watch,
            // plugins: [watchPlugin]
        });
        console.log('\x1b[32m', `[${new Date(Date.now()).toLocaleTimeString()}] Build finished successfully!`);
    }
    catch (err) {
        console.error('\x1b[31m', `[${new Date(Date.now()).toLocaleTimeString()}] Build finished,  with errors: ${err}`)
    }
}

main()