const fileRegex = /\.(js)$/;

export default function myPlugin() {
  return {
    name: 'transform-file',

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: compileFileToJS(src),
          map: null, // provide source map if available
        };
      }
    },
  };
}

const compileFileToJS = (src) => {
  //   const matches = src.match('dyndatetime[sS]*?)');
  //   matches.forEach((element) => {
  //     src.replace(element, 'teeeeest');
  //   });

  return src;
};
