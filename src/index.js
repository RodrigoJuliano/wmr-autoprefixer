import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

function wmrAutoPrefixer() {
    let options;
    return {
        name: 'wmr-autoprefixer',
        enforce: 'pos',
        configResolved(config) {
            options = config;
        },
        async transform(code, id) {
            if (!id.endsWith('.css')) return;
            const result = await postcss([autoprefixer]).process(code, {
                from: undefined,
            });
            result.warnings().forEach((warn) => {
                console.warn(warn.toString());
            });
            return result.css;
        },
    };
}

export default wmrAutoPrefixer;
