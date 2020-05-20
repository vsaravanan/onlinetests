/* global BigInt */
export const fact = (n) => {
    let k = BigInt(n)
    if (k < 2) {
        return BigInt(1n)
    }
    else {
        return k * fact(k-1n);
    }
  
  }
  