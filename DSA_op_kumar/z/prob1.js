function printPattern(n) {
    if (n % 2 === 0 || n <= 3) {
      return;
    }
  
    for (let i = 1; i <= n; i++) {
      let spaces = Math.abs(Math.floor(n / 2) - i + 1);
      let stars = i <= Math.floor(n / 2) + 1 ? i : n - i + 1;
      console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
  }
  
  printPattern(5);