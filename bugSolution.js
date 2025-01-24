function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative inputs
  }
  return foo(a - 1, a + b);
}
//Alternative iterative solution
function fooIterative(a, b) {
  let result = b;
  while (a > 0) {
    result += a;
    a--;
  }
  return result;
}