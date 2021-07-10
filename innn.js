const specials = /^[A-Za-z0-9]*$/;


if(!'aa123!!'.match(/^[A-Za-z0-9]*$/)){
    console.log('aaaa')
  }

if (!/^[A-Za-z0-9]*$/.test('aa123!!')) {
    console.log('bbbb')
  }

if (/[!@#$%^&*./,<>-_+=]/.test('aaAA123')) {
    console.log('dddd')
  }
