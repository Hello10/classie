function classie(arg) {
  let classes = [];

  function add(arg = []) {
    if (Array.isArray(arg)) {
      classes = [...classes, ...arg];
    } else if (arg.constructor === String) {
      classes.push(arg);
    } else {
      for (const c of Object.keys(arg)) {
        let v = arg[c];

        if (v && v.constructor === Function) {
          v = v();
        }

        if (v) {
          classes.push(c);
        }
      }
    }

    return add;
  }

  add.toString = function toString() {
    return classes.join(' ');
  };

  return add(arg);
}

export default classie;
//# sourceMappingURL=index.modern.js.map
