export default function myPlugin() {
  return {
    name: 'transform-file',
    transform(src, id) {
      if (/\.(jsx)$/.test(id)) {
        return {
          code: replaceDynamicDates(src),
          map: null, // provide source map if available
        };
      }
    },
  };
}
const now = new Date();

const replaceDynamicDates = (src) => {
  var str = src.replace(/['|"]dyndatetime\(([^)])*\)['|"]/g, function (i) {
    return parseDatestring(i);
  });
  return str;
};

const parseDatestring = (s) => {
  s = s.replace(/dyndatetime/, '');
  s = s.replace(/\(/, '');
  s = s.replace(/\)/, '');
  s = s.replace(/y/, now.getFullYear());
  s = s.replace(/m/, now.getMonth());
  s = s.replace(/d/, now.getDate());
  s = s.replace(/h/, now.getHours());
  s = s.replace(/i/, now.getMinutes());
  s = s.replace(/['|"](.*)['|"]/, function (i) {
    const dateDict = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
    const date = i.replace(/['|"]/g, '');
    let dateArray = date.split(',');
    dateArray.forEach((i, index) => {
      const plus = i.includes('+');
      const minus = i.includes('-');
      const splittedNum = i.split(/[/+|/-]/);
      let num = 0;
      splittedNum.forEach((element) => {
        if (plus) {
          return (num += parseInt(element));
        }
        if (minus) {
          return index === 0 ? (num += parseInt(element)) : (num -= parseInt(element));
        }
        num += parseInt(element);
      });
      return (dateDict[index] = num);
    });
    const dd = new Date(dateDict[0], dateDict[1], dateDict[2], dateDict[3], dateDict[4]);
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1;
    const d = dd.getDate();
    const h = dd.getHours();
    const mm = dd.getMinutes();
    return (
      "'" +
      y +
      '-' +
      (m < 10 ? '0' : '') +
      m +
      '-' +
      (d < 10 ? '0' : '') +
      d +
      'T' +
      (h < 10 ? '0' : '') +
      h +
      ':' +
      (mm < 10 ? '0' : '') +
      mm +
      "'"
    );
    // return "'" + new Date(dateDict[0], dateDict[1], dateDict[2], dateDict[3], dateDict[4]).toISOString() + "'";
  });
  return s;
};
