# classie
![](/classie.jpg)

```
const classes = classie('Honk Donk!')({
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
```
