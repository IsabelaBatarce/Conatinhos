class Task {
  constructor (description) {
    this.description = description;
    this.isCompleted = false;
    this.code = 0;
  }

  printInfo () {
    if (this.isCompleted) {
      
      return this.description + '' 
    } else {
      return this.description + ''
    }
  }

  complete () {
    this.isCompleted = true;
  }
}
