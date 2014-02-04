# Interpolate

## Install

```
npm install --save lib-interpolate
```

## Usage

```
var Interpolate = require('lib-interpolate');

var map = {
  user: 'jacob',
  home: '/home/jacob'
};

var interp = new Interpolate(map);

interp.expand("%{user}'s home is %{home}");
// jacob's home is /home/jacob
```
