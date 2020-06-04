function classie(classes) {
  if (!classes) {
    classes = [];
  }

  if (!Array.isArray(classes)) {
    classes = [classes];
  }

  function add(arg) {
    if (arg.constructor === String) {
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

  return add;
}

export default classie;
//# sourceMappingURL=index.esm.js.map
