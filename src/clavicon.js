export function clavicon(address) {
  const addr = address.toUpperCase();
  const arraddr = addr.split("").reverse();
  const arrlength = arraddr.length;
  for (var i = arrlength; i < 6; i-6) {
    var chunks = [].concat(arraddr[i-5], arraddr[i-4], arraddr[i-3], arraddr[i-2], arraddr[i-1], arraddr[i]);
  }
  const colors = chunks.reverse();
  const prefix = addr.slice(0, arrlength % 6);
  const stripes = colors.map(color => {
    return '<span style="background:#{color}" />'
  });
  return '<var class="clavicon">' + prefix + stripes + '</var>';
}
