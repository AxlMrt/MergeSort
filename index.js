function fusion(a, b) {
    if (a.length == 0) {
      return b;
    }
    if (b.length == 0) {
      return a;
    }
    if (a[0] <= b[0]) {
      return [a[0], ...fusion(a.slice(1), b)];
    }

    return [b[0], ...fusion(a, b.slice(1))];   
}

function triFusion(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.trunc(arr.length / 2);
  const first = arr.slice(0, mid);
  const second = arr.slice(mid)

  return fusion(triFusion(first), triFusion(second));
}

console.log(triFusion([1, 6, 7, 2, 5, 3, 4, 9, 8]));
