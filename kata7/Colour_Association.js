function colourAssociations(array) {
  return array.map(([colour, association]) => {
    return { [colour]: association };
  });
}
