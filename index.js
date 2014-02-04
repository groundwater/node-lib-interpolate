function Interpolate(map) {
  this.map = map || {};
}

Interpolate.prototype._prefix = '%{';
Interpolate.prototype._suffix = '}';

Interpolate.prototype.expand = function expand(string) {
  var out = string;
  var map = this.map;
  for (var key in this.map) {
    var reg = this._prefix + key + this._suffix;
    out = out.replace(new RegExp(reg, 'g'), function() {return map[key]});
  }
  return out;
};

module.exports = Interpolate;
