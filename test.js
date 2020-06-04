const Assert = require('assert');

const classie = require('./dist/index');

const honk = 'Honk';
const donk = 'Donk!'

describe('classie', ()=> {
  it('should work for the simple case of one class derp', ()=> {
    const classes = classie(honk);
    Assert.equal(`${classes}`, honk);
  });

  it('should work for conditionally adding class directly as string', ()=> {
    const classes = classie(honk);
    if (true) {
      classes(donk);
    }
    Assert.equal(`${classes}`, [honk, donk].join(' '));
  });

  it('should work for passing object', ()=> {
    const classes = classie(`${honk} ${donk}`)({
      Funk: true,
      Dirk: 0 === 0,
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

  it('should handle no initial class arg', ()=> {
    const classes = classie();
    Assert.equal(classes.toString(), '');
  });
});
