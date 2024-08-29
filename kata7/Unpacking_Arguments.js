function spread(func, args) {
  return func(...args);
}
spread(someFunction, [1, true, "Foo", "bar"]); // someFunction(1, true, "Foo", "bar")
