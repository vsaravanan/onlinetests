
export const longestPalindrome_dynamicprogramming = (s) => {
  if (s === undefined || s.length < 1) {
    return ""
  }


  // let b = s.split("")


  const palin = (x, f, l) => {
    // console.log(f + ' - ' + l + ' - ' + x[f] + ' - ' + x[l] )
    if (f < l) {
      const front = x[f]
      const last =  x[l]
      if (front === last) {
        let tmp = palin(x, ++f, --l) 
        if (tmp === "~ERROR~") {
          return tmp
        }
        else {
          tmp = front + tmp + last
          // console.log(tmp) 
          return tmp
        }
      }
      else {
        return "~ERROR~"
      }
    }
    else if (f === l || f+1 === l) {
      const tmp = x.slice(f, l+1)
      // console.log(tmp)
      return tmp
    }
    else {
      return ""  // both chrs are equal
    }


  }



  let lastfound = ""
  for (let i = 0; i < s.length; i++) {
    // b = s.slice(i,s.length)
    let mysize = (s.length - i )
    // console.log("b " + i + "  " + b + "  " + mysize)
    if (lastfound !== "") {
      break
    }
    for (let j = 0; j <= i ; j++) {
      let t = s.substr(j, mysize)
        // console.log(" t " + i + "  " + t + "  " + j )
        const tmp = palin(t, 0, t.length - 1)
        if (tmp !== "~ERROR~") {
          lastfound = tmp
          // console.log("lastfound " + lastfound)
          break
        }
     }
    // for (let j = b.length, k = 1; i<=j, j > 0; j--, k++) {
    //   let t = b.slice(0, j)
    //   // console.log("t " + j + "  " + t )
    //     if (lastfound.length >= t.length) {
    //       // console.log("lastfound.length >= t.length")
    //       break
    //     }
    //     const tmp = palin(t, 0, t.length - 1)

    //     if (tmp !== "~ERROR~" && lastfound.length < tmp.length) {
    //       lastfound = tmp
    //       // console.log("lastfound " + lastfound)
    //       // if (k <= 2) {
    //       //   console.log("k <= 2")
    //       //   break
    //       // }          
    //     }
  
    // }

  
  }
  // console.log("returning : " + s + " : " + lastfound )
  return lastfound 


} 

