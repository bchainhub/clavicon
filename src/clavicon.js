function create(address) {
  const addr = address.toUpperCase();
  const stop = addr.length;
  const start = stop % 6;
  let chunks = [];
  for (var i = start; i < stop; i = i+6) {
    chunks.push(addr.slice(i, i+6));
  }
  const prefix = addr.slice(0, start);
  const stripes = chunks.map(color => {
    return `<span style="background:#${color}">&nbsp;</span>`
  });
  return '<var class="clavicon">' + prefix + stripes.join('') + '</var>';
}

export { create };
