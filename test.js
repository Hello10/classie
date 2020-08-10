const Assert = require('assert');

const classie = require('./dist/index');

describe('classie', ()=> {
  it('should work for the simple case of one class string', ()=> {
    const classes = classie('Honk');
    Assert.equal(`${classes}`, 'Honk');
  });

  it('should work for conditionally adding class', ()=> {
    const classes = classie('Honk');
    classes('Donk');
    Assert.equal(`${classes}`, 'Honk Donk');
  });

  it('should work for passing object', ()=> {
    const classes = classie('Honk Donk!')({
      Funk: true,
      Dirk: 1 > 0,
      No: null,
      Nope: undefined,
      Narp: ()=> {
        return false;
      },
      'Derp?!': ()=> {
        return true;
      }
    });
    Assert.equal(`${classes}`, 'Honk Donk! Funk Dirk Derp?!');
  });

  it('should return empty string when object with no true values', ()=> {
    const classes = classie({
      wow: false
    });
    Assert.equal(classes.toString(), '');
  });

  it('should handle no initial arg', ()=> {
    const classes = classie();
    Assert.equal(classes.toString(), '');
    classes('Ok');
    Assert.equal(classes.toString(), 'Ok');
  });

  it('should work for passing an array', ()=> {
    const classes = classie(['Ok', 'Wow']);
    classes('Something');
    classes({
      Donk: true,
      Wonk: false
    });
    classes(['Woah', 'Hmm']);
    Assert.equal(`${classes}`, 'Ok Wow Something Donk Woah Hmm');
  });

  it('should handle just an object', ()=> {
    const classes = classie({
      Yep: true,
      Nope: false,
      Uhuh: 1 > 0
    });
    Assert.equal(`${classes}`, 'Yep Uhuh');
  });
});
