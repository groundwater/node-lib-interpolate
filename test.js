var interp = new Interpolate({
  'user': 'jacob',
  'home': '/home/jacob',
  'hostname': 'mymac'
});

var out = interp.expand('%{user}\'s home is %{home} -- %{user}');
console.log(out);
