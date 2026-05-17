function bunnyEars(bunnies) {
  if (bunnies == 0) {return 0;}
  return 2 + bunnyEars(bunnies - 1);
}
bunnyEars(0) // should give 0
bunnyEars(1) // should give  2
bunnyEars(2) // should give 4