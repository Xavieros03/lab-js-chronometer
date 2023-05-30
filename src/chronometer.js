class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
        setInterval(() => {
            if(typeof printTimeCallback === 'function'){
                printTimeCallback()
                
            }
            return this.currentTime++
            
        }, 1000);
        
  }
  
  getMinutes() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0
    }
    else{
      return Math.floor(this.currentTime / 60)
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    } else {
      return this.currentTime % 60
    }
  }
  

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return '0' + value
    }
    else{
    return value.toString()
    }
  }

  stop() {
    // ... your code goes here
      clearInterval(this.intervalId);
    
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    
  }
}
