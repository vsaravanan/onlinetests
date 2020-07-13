


export const odd_occurencies_old = (A = data_odd_occurencies) => {
    let s = A
    let f = s.pop()
    if (s.length === 0) {
        return f
    }
    let j = s.length - 1
    let k = 1

    while (true) {
        if (f === s[j]) {
            k = (k === 0) ? 1 : 0
            // console.log(s, s[j])
            s.splice(j,1)
            // console.log(s)
        }

        // console.log('B', f, j, s[j], k)

        if ( j === 0 ) {
            if (k === 1) {
                return f
            }
            else {
                if (s.length === 0) {
                    return -1
                }
                else {
                    f = s.pop()
                    if (s.length === 0) {
                        return f
                    }                    
                    k = 1
                    j = s.length - 1
                }
            }
        }
        else {
            j--
        }        

    }

}

const maxslice_data = [-10]

export const findmaxslice = (A = maxslice_data) => {
    let result = 0
  
    const maxslice = (arr) => {
        let s = arr
        if (arr.length > 0) {
            result = s[0]
        }


        for (let i = 0; i < s.length; i++) {
            let sum = 0
            for (let j = i; j < s.length; j++) {
                // let b = s.slice(i,j+1)
                sum += s[j]
                // let sum = s.slice(i,j+1).reduce((sum, c) => sum + c )
                result = Math.max(sum,result)

                console.log(i + "  " + j + "  " + sum + "  " + result)
                
            }

        }
   }
  
   maxslice(A)
  
   return result
}

const data_max_product_three = [-8, 1, 2, -2, 5, 6]

export const max_product_three = (A = data_max_product_three) => {
    let result
    const max_product_three_in = (arr) => {
        let s = arr.sort( (a, b) => a - b)
        let l = s.length
        let max1 = s[l-1] *  s[l-2] *  s[l-3]
        let max2 = s[0] *  s[1] *  s[l-1]
        result = Math.max(max1, max2)
        console.log(max1, max2, result)
        return result

   }
  
   max_product_three_in(A)
  
   return result
}

const data_cyclic_rotation = [3, 8, 9, 7, 6]

export const cyclic_rotation = (A = data_cyclic_rotation, K=3) => {
    const cyclic_rotation_in = (s, k) => {
        let dopop = k % s.length
        console.log('dopop ', dopop)
        for (let i = 0; i < dopop; i++) {

            s.unshift(s.pop())
            console.log(i,' ',s)
        }
        return s
    }
  
    let result = cyclic_rotation_in(A, K)
  
   return result
}


// console.log(cyclic_rotation())
// console.log(cyclic_rotation([0, 0, 0],1))
// console.log(cyclic_rotation([1, 2, 3, 4],4))


const data_odd_occurencies = [9, 3, 9, 3, 9, 7, 9]
// const data_odd_occurencies = [1]

export const odd_occurencies = (A = data_odd_occurencies) => {
    let s = A.sort( (a, b) => a - b)
    let f = s.pop()
    if (s.length === 0) {
        return f
    }

    let k = 1

    while (true) {
        if (f === s[s.length -1]) {
            k = (k === 0) ? 1 : 0
        }
        else {
            if (k === 1) {
                return f
            }
            else {
                k = 1
            }
        }
        f = s.pop()
        if (s.length === 0) {
            if (k === 1) {
                return f
            }
            else {
                return -1
            }
        }        
    }

}


// const data_binary_gap = [9, 3, 9, 3, 9, 7, 9]


export const binary_gap = (N = 43) => {
    // console.log(N.toString(2))

    let s = N.toString(2).split('')
    // convert string to number
    s = s.map(x => x * 1)
    let i = 0
    // get first chr
    let c = 0
    let m = 0
    let b = false

    // loop start from second chr
    while (++i < s.length) {
        // console.log('A', i, m, c, l, s[i])
        if (s[i-1] === 1 && s[i] === 0) {
            // beginning of 0000
            b = true
        }
        else if (s[i-1] === 0 && s[i] === 1) {
            // end of 0000
            if ( ( m < c ) && b) {
                // get max count
                m = c
            }
            // rest last chr and reset count             
            b = false
            c = 0
        }
        if (b) {
            c++
        }
        // if (l !== s[i]) {
        //     if (s[i] === 1) {
        //         // end of 0000
        //         if (m < c) {
        //             // get max count
        //             m = c
        //         }
        //     }
        //     // beginning of 0000
        //     // rest last chr and reset count 
        //     l = s[i]
        //     c = 0
        // }
        // if (s[i] === 0) {
        //     c++
        // }
        // console.log('B', i, m, c, l, s[i])


    }   
    return m 

}


// console.log(odd_occurencies())
// console.log(odd_occurencies([2,2]))
// console.log(odd_occurencies([1]))
// console.log(binary_gap())


export const binary_gap2 = (N = 6) => {
    // console.log(N.toString(2))

    let s = N.toString(2).split('')
    // convert string to number
    s = s.map(x => x * 1)
    let i = -1
    let m = 0
    let l = -1

    // loop start from second chr
    while (++i < s.length) {
        // console.log("[  i, l, m, s[i]   ",  i, l, m, s[i])
        if (s[i] === 1) {
            if (l > -1) {
                // end of 1
                let c = i - l
                if ( m < c ) {
                    // get max count
                    m = c
                }
            }       
            // beginning of 1
            l = i
        }
       
        // console.log("   i, l, m, s[i]  ]",  i, l, m, s[i])

    }   
    return m 

}

// console.log(binary_gap2(22))
// console.log(binary_gap2(5))
// console.log(binary_gap2())
// console.log(binary_gap2(8))


export const frog_jump = (X = 10, Y = 85, D = 30) => {
    // let i = 0
    // let j = X
    // while (j < Y) {
    //     i++
    //     j += D
    // }
    let k = Math.ceil( (Y-X) / D )
    // k +=  ( (Y-X) % D !== 0 ) ? 1 : 0

    // console.log(X, Y, D, i, k )
    
    return k

}


// console.log(frog_jump())
// console.log(frog_jump(1,1,1))
// console.log(frog_jump(1,1,2))
// console.log(frog_jump(1,2,1))
// console.log(frog_jump(1,2,2))
// console.log(frog_jump(2,2,1))
// console.log(frog_jump(2,2,2))
// console.log(frog_jump(2,2,3))


export const perm_missing_item = (A = [2,3,1,5]) => {
    let s = A.sort( (a, b) => a - b)

    let i = 0
    while ( i < s.length) {
        if (s[i] !== i+1) {
            // console.log(s, i+1)
            return i+1
        }
        i++

    }
    // console.log(s, i+1)

    return i+1

}


export const missing_integer = (A = [1, 3, 6, 4, 1, 2]) => {

    let s = A.filter(x => x > 0).sort( (a, b) => a - b)
    // console.log(s)

    let i = 0
    let expectedNumber = 1 


    while ( i < s.length) {
        console.log( `i  ${i}  s[i-1] ${s[i-1]}   s[i] ${s[i]} expectedNumber  ${expectedNumber} ` )
        let isPrev = i > 0 && s[i] === s[i - 1]
        if (! isPrev && s[i] !== expectedNumber) {
            break
        }
        if (! isPrev ) {
            expectedNumber++
        }
        i++


    }

    // console.log(` expectedNumber  ${expectedNumber}   `)

    return expectedNumber

}


// missing_integer()
// missing_integer([1, 2, 3])
// missing_integer([-1, -3])
// console.log(perm_missing_item())
// console.log(perm_missing_item([]))
// console.log(perm_missing_item([1]))
// console.log(perm_missing_item([2]))
// console.log(perm_missing_item([1,3]))
// console.log(perm_missing_item([2,3]))
// console.log(perm_missing_item([1,2]))
// console.log(perm_missing_item([1,2,3]))
// console.log(perm_missing_item([-1, -3]))
// console.log(perm_missing_item([1,3,4]))
// console.log(perm_missing_item([2,4,3]))
// console.log(perm_missing_item([2,3,1,5]))
// console.log(perm_missing_item([4, 2, 3, 1, 5, 6, 8, 9]))
// console.log(perm_missing_item([4, 2, 3, 1, 5, 6, 8, 7]))

// console.log('***************************')

// console.log(missing_integer([ 1 ])) // 1

// console.log(missing_integer([1, 3, 6, 4, 1, 2, 2]))  // 5
// console.log(missing_integer([1, 3, 6, 4, 1, 2, 5]))  // 7
// console.log(missing_integer([1, 2, 2, 3])) // 4
// console.log(missing_integer([1, 1, 2, 3])) // 4
// console.log(missing_integer([ -1,-3]))  // 1
// console.log(missing_integer([ -1,-3, 2])) // 1
// console.log(missing_integer([ -1,-3, 1])) // 2
// console.log(missing_integer([ 0 ])) // 1
// console.log(missing_integer([-1000000 ])) // 1
// console.log(missing_integer([-1000000, 1 ]))  // 2
// console.log(missing_integer([ 1000000  ]))  // 1
// console.log(missing_integer([  999999, 999998, 1000000 ])) // 1
// console.log(missing_integer([ 1, 3, 999999, 999998, 1000000 ])) // 2




// console.log(missing_integer())
// console.log(missing_integer([]))
// console.log(missing_integer([1]))
// console.log(missing_integer([2]))
// console.log(missing_integer([1,3]))
// console.log(missing_integer([2,3]))
// console.log(missing_integer([1,2]))
// console.log(missing_integer([1,2,3]))
// console.log(missing_integer([-1, -3]))
// console.log(missing_integer([1,3,4]))
// console.log(missing_integer([2,4,3]))
// console.log(missing_integer([2,3,1,5]))
// console.log(missing_integer([4, 2, 3, 1, 5, 6, 8, 9]))
// console.log(missing_integer([4, 2, 3, 1, 5, 6, 8, 7]))



export const tape_equilibrium = (A = [3, 1, 2, 4, 3]) => {
    let s = A
    const summer = (acc, cur) => acc + cur;
    let t = s.reduce(summer)
    let m = 0

    for (let i = s.length -1, p = t; i > 0; ) {
        p -= 2 * s[i]
        let c = Math.abs(p )
        if (i === s.length -1) {
            m = c
        }
        if (m > c) {
            m = c
        }
        console.log(`s ${s}     : s[i] ${s[i]}  t ${t} i ${i} p ${p} m ${m} c ${c}  `)
        i--

    }
    console.log(m)
    return m 


}

// tape_equilibrium()
// tape_equilibrium([3, -1, 2, -4, 3])
// tape_equilibrium([3, -1])
// tape_equilibrium([2, -4])
// tape_equilibrium([-7, 3])
// tape_equilibrium([-5, 9])

export const max_counters =  (A = [3, 4, 4, 6, 1, 4, 4 ], N = 5) => {

    let j = 0 ;
    let i = 0;
    let len = A.length;
    let lastMax = 0;
    let max = 0; 
    let counters = new Array (N);
    for(j = 0; j < N; j++) counters[j] = 0;
    let n1 = N + 1;
    
    for(let j=0; j < len; j++){
        // debugger

        console.log(` [ i ${i} j ${j} A[i] ${A[i]} A[j] ${A[j]} lastMax ${lastMax} max ${max} counters ${counters}  `)
        if(A[j] < n1){
            i = A[j] - 1;
            if (counters[i] < lastMax) counters[i] = lastMax;
            counters[i]++;
            if (max < counters[i]) max = counters[i];
        } else {
            lastMax = max;
        }
        console.log(`   i ${i} j ${j} A[i] ${A[i]} A[j] ${A[j]} lastMax ${lastMax} max ${max} counters ${counters}  ]`)

    }
    

    counters.forEach( (x, i) => {
        if (x < lastMax) counters[i] = lastMax;
    })

    console.log(` counters ${counters}  `)

    
    return counters;
}

// max_counters()

export const perm_check = (A = [4, 1, 3, 2]) => {


    let i = 0
    let s = A.sort( (a, b) => a - b)

    for (let e of s) {
        if (++i !== e) {
            return 0
        }

    }
    return 1



}



export const frog_river_one = (X = 5, A = [1, 3, 1, 4, 2, 3, 5, 4]) => {

    if (A.length === 0) return -1
    if (A.length < X) return -1



    let leaves = new Set()
    // let leaves = {}
    let steps = -1
    for (let i = 0; i < A.length; i++) {

        if (A[i] <= X && ! leaves.has(A[i])) {
            leaves.add(A[i])
        }
        // if (A[i] <= X && ! leaves[A[i]]) {
        //     leaves[A[i]] = true
        // }        

        // console.log(` X ${X} A ${A}  A[i] ${A[i]} leaves[A[i]] ${leaves[A[i]]} steps ${steps}  i ${i} ${X} ${steps.size === X}  ${ new Array(...leaves).join(' ') } `)
        // console.log(` X ${X} A ${A}  A[i] ${A[i]} leaves[A[i]] ${leaves[A[i]]} steps ${steps}  i ${i} ${X} ${steps.size === X} leaves  ${ JSON.stringify(leaves) } `)
        
        // if (Object.keys(leaves).length === X) {
        if (leaves.size === X) {
            steps = i
            break
        }
    }

    // console.log(steps)
    return steps



}


export const count_div = (A = 4, B = 8, K = 3) => {


    const count_div_in = () => {
        if (A === 0 && B === 0) {
            return 1
        }
        if (K > B) {
            return 0
        }
        let c = A % K
        let d = c === 0 ? A : A + K - c 
        if (d > B ) {
            // console.log( ` A ${A}  B ${B}   K ${K}   c ${c}  d ${d} f ${'f'} r ${'r'}   `)
            return 0
        }

        let f = Math.floor ( (B - d) / K )
        let r = 1 + f
    

        // console.log( ` A ${A}  B ${B}   K ${K}   c ${c}  d ${d} f ${f} r ${r}   `)

        return r


    }

    let res = count_div_in()

    // console.log(res)
    return res


}


// count_div(0, 0, 1) // 1
// count_div(3, 5, 3) // 1
// count_div(4, 5, 6) // 0
// count_div(4, 5, 3) // 0
// count_div(4, 8, 3) // 1
// count_div(4, 9, 3) // 2
// count_div(3, 9, 3) // 3

// frog_river_one ( 3, [ 1, 3, 1, 3, 2, 1, 3] ) //  4
// frog_river_one ( 3, [ 1, 4, 2, 3]) // 3
// frog_river_one ( 4, [ 1, 2, 3, 4, 3, 3, 1, 2, 4, 4, 2, 1 ] ) // 3
// frog_river_one ( 5, [ 1, 3, 1, 4, 2, 3, 5, 4] ) // 6
// frog_river_one ( 4, [ 1, 2, 3, 2, 3, 3, 1, 2, 2, 4, 2, 1 ] ) // 9
// frog_river_one ( 2, [ 1, 1, 1, 1] ) // -1

export const min_avr_two_slice = ( A = [ 4, 2, 2, 5, 1, 5, 8 ] ) => {
    let min_pos = 0
    let min = Number.MAX_VALUE

    // console.log(A)

    const find_min = (val, pos) => {

        if (val < min) {
            min_pos = pos
            min = val
        }
        // console.log(` min ${min} , min_pos ${min_pos}  `)
    }

    const min_avr_two_slice = () => {
        for (let i = 0; i < A.length - 2; i++) {
            // console.log('A', A[i] ,  A[i + 1])
            find_min ( ( A[i] + A[i + 1] ) / 2, i);
            // console.log('B', A[i] ,  A[i + 1],  A[i + 2])
            find_min ( ( A[i] + A[i + 1] + A[i + 2] ) / 3, i);
        }
        // console.log('C',  A[ A.length -2 ],  A[A.length - 1], A.length -2)
        find_min ( ( A[ A.length -2 ] + A[A.length - 1] ) / 2, A.length - 2 );
    }

    min_avr_two_slice()
    console.log(`result : min ${min} , min_pos ${min_pos}  `)

    return min_pos


}

// min_avr_two_slice()
// min_avr_two_slice([ 10000, -10000 ])
// min_avr_two_slice([9,9,1,1])

export const genomic_range_query = (S = 'CAGCCTA', P = [2,5,0], Q = [4,5,6]) => {
    // let arr = ['Z', 'A', 'C', 'G', 'T']
    // let s = []
    // ; [...S].forEach(x => s.push(arr.indexOf(x)))
    // console.log(s)

    const genMap = {
        A: 1,
        C: 2,
        G: 3,
        T: 4,
      }
    const sStr = 'ACGT'
    let r = []
    for (let i = 0; i < Q.length; i++ ) {
        // let m = arr.length
        // console.log(m)
        // for (let j = P[i]; j <= Q[i]; j++ ) {

        //     if (s[j] < m) {
        //         m = s[j]
        //     }

        //     // console.log(i, j, s[j], m)

        // }
        // r.push(m)
        let n = S.slice(P[i], Q[i] + 1)
        // console.log('str : ', n)
        for (let i = 0; i < 4; i++) {
            // const char =  Object.keys(genMap).find(key => genMap[key] === i+1);
            const char = sStr[i]
            // console.log(char)
            if ( n.indexOf(char) > -1 ) {
                r.push(genMap[char])
                break;
            }

        }

            // let n = s.slice(P[i], Q[i] + 1)
            // console.log(i, P[i], Q[i], Q[i] +1, n, Math.min(...n) )
            // r.push(Math.min(...n))
    }

    // console.log(r)
    return r

}

// genomic_range_query() // 241

// export const passing_cars_old = (A = [1,  0, 1, 1 , 0, 0, 1 , 1, 0, 0 ]) => {
//     // console.log([0,1,2,3,4,5,6,7])
//     // console.log(A)
//     let t = A.join('')
//     // console.log(t)
//     let sum = 0
//     let s = A
//     let i = s.length - 1
//     let c = t[i]
//     c = c === '0' ? '1' : '0'
//     let ones = 0
//     let zeros = 0
//     while ( i >= 0) {
        
//         let pos = t.substr(0,i).lastIndexOf(c)
//         if (pos > -1) {
//             if (t[i] === '1') {
//                 ones += i - pos
                
//             }
//             else {
//                 zeros = i - pos
//                 sum += ( ones * zeros )
//             }
//             // console.log(i, t[i], pos, c, t.substr(0,i+1), zeros, ones, sum)
//             i = pos 
//             c = c === '0' ? '1' : '0'
    
//         }
//         else {
//             zeros = 0
//             if (t[i] === '0') {
//                 sum += ones 
//             }
//             // console.log(i, t[i], pos, c, t.substr(0,i+1), zeros, ones, sum)
//             i--
//         }
//         if (sum > 1000000000) {
//             return -1
//         }
//     }


//     // console.log(sum)
//     return sum
// }


export const passing_cars = (A = [1,  0, 1, 1 , 0, 0, 1 , 1, 0, 0 ]) => {
    let ones = 0
    let count = 0
    for (let j = A.length -1; j >= 0; j--) {
        if (A[j] === 1) {
            ones++
        } else if (A[j] === 0) {
            count += ones
        }
        if ( count > 1000000000 ) {
            return -1
        }
    }
    console.log(count)
    return count

}

// passing_cars()

export const triangle = (A = [10, 2, 5, 1, 8, 20]) => {
    if (A.length < 3 ) {
        return 0
    }
    A = A.sort( (a, b) => a - b)
    for (let i = 0; i < A.length -2; i++) {
        if (A[i] >= 0 && A[i] > A[i+2] - A[i+1]) {
            return 1
        }
    }

    return 0 


}
// console.log(triangle())

export const test_reduce = () => {
    let arr = [2,4,5,2,4,5,5,6,3]
    let arr_set = [...new Set(arr)]
    let foo = arr_set.reduce( (a,b) => a + b, 0)

    console.log(foo + arr_set.length)
}
// test_reduce()

export const no_of_disc_intersections = (A = [ 1, 5, 2, 1, 4, 0]) => {

    var events = []
    A.forEach(function(x, i){
        events.push({type: 'left', value: i-x})
        events.push({type: 'right', value: i+x})
    })
    events = events.sort(function(a,b){
        if(a.value !== b.value) return a.value - b.value;
        else return (a.type === 'right' ? 1 : -1);
    })

    var c= 0;
    var stack = [];
    for(let i = 0; i < events.length; i++){
        let event = events[i];
        // let added = 0

        if(event.type === 'left'){
            // added = stack.length
            c += stack.length;
            if(c > 10000000) return -1;
            stack.push(1);
        }else{
            stack.pop()
        }
        // console.log(added, c, event, stack)
    }

    // console.log(`returning ${c}`)
    return c;




}
// no_of_disc_intersections()
// no_of_disc_intersections([])
// no_of_disc_intersections([0,1])
// no_of_disc_intersections([0,0])
// no_of_disc_intersections([1,0,0,3])


    // const disc = (size, start, end) => {  return {size, start, end} }
    // let discs = []

    // A.forEach(( x, i) => 
    // {
    //     discs.push(disc(x, i - x, i + x))
    // })
    // console.log(discs)

    // let discsstart =  discs.map(a => ({...a})).sort( (a, b) => (a.start > b.start ? 1 : -1))
    // console.log(discsstart)
    // let discsend =  discs.map(a => ({...a})).sort( (a, b) => (a.end < b.end ? 1 : -1))
    // console.log(discsend)

    // for (let i = 0; i < discsstart.length -1; i++ ) {
    //     for (let j = 0; j < discsend.length -1 ; j++ ) {
    //         console.log(discsstart[i].start, discsend[j].end)

    //     }
    // }
    // debugger

export const distinct = (A = [ 2, 1, 1, 2, 3, 1]) => {
    // // let count = 0
    // let s = new Set
    // A.map( (v, i, s) => {
    //     // if (s.indexOf(v) === i ) {
    //     //     count++
    //     // }
    // })
    return ( new Set(A) ).size
}

// let a = distinct([])
// console.log(a)
// {[()()]}
export const brackets = (S = "{[()()]}") => {

    let mp = new Map()
    mp.set('}','{')
    mp.set(']','[')
    mp.set(')','(')


    let s = S.split('')
    // console.log(s)
    let a = []
    for (let i = 0; i < s.length ; i++) {
        let val = mp.get(s[i])
        if ( val ) {
            if (a.length < 1 || val !== a.pop() ) {
                // console.log(0)
                return 0
            }
        }
        else {
            // mp.has(s[i]) 
            a.push(s[i])
        }
        // console.log(a)

    }

    let ret = a.length === 0 ? 1 : 0
    // console.log(ret)

    return ret

}

// brackets()
Array.prototype.peek = function() {
    return this[this.length-1]
}


export const stonewall = (H = [8, 8, 5, 7, 9, 8, 7, 4, 8]) => {
    console.log(H)
    
    var long = H.length;
    let res = [];
    var count = 0;
    res[0] = H[0];


    for(let i=1;i<long;i++){
        console.log(` [ i  ${i} count ${count} res  ${res} peek ${res.peek()} H[i] ${H[i]}  `)
        if(res.peek()===H[i]){
            count++;
            console.log('count ', count)
        }
        else if(res.peek()>H[i]){
            while(res.peek()>H[i]){
                console.log('pop ', res.peek())
                res.pop();
            }
            if(res.peek()===H[i]){
                count++;
                console.log('count ', count)
            }
            else{
                console.log('push ', H[i])
                res.push(H[i]);
            }
        }
        else{
            console.log('push ', H[i])
            res.push(H[i]);
        }
        console.log(`  i  ${i} count ${count} res  ${res}  ${res.peek()} H[i] ${H[i]} peek  ]`)
        console.log('--------------------------------------------------------')
    }
    console.log(H, H.length-count)
    return H.length-count; 

}


// stonewall()
// stonewall([1, 2, 3, 4, 3]) // 4
// stonewall([8, 8, 5])
// stonewall([1,3,2,1,2,1,5,3,3,4,2] )


export const find_prime_count = (A=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]) => {

    let count = 0
    let primes = [2,3,5,7]
    for (let i = 0; i < A.length; i++) {
        let value = A[i]

        let prime = true
        let completed = false

        for (const el of primes) {
            if (value === el) {  // check if exists in prime list
                count++
                completed = true
                break
            }
            else if (value % el === 0) {  // non-prime if divisable by prime numbers
                prime = false
                break
            }
        }


        // find new prime numbers and add into list of prime
        if (! completed && prime) {
            for (let j = primes.peek() + 2; j < Math.sqrt(value); i+=2) {
                if(value % j === 0) { // non-prime
                    prime = false;
                    break
                }
            }
            if (prime) {
                primes.push(value)
                count++
            }
        }

        console.log(` count ${count}  value  ${value} ${prime ? 'prime' : ''} ` )
    }
    console.log(primes)
    return count
}


function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

// let counts = find_prime_count()
// console.log(counts)

function printPrime(value) {
    let primes = [];
    for(let i = 2; i < value; i++) {
        primes[i] = true;
    }
    let limit = Math.sqrt(value);
    for(let i = 2; i < limit; i++) {
        console.log(` i ${i}  limit ${limit} `)
        if(primes[i] === true) {
            for(let j = i * i; j < value; j += i) {
                console.log(` j ${j} `)
                primes[j] = false;
            }
        }
    }
    for(let i = 2; i < value; i++) {
        // if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        // }
    }
}

// printPrime(40)

    // let up = []
    // let down = []

    // for (let i = 0; i < A.length; i++) {
    //     if ( B[i] === 0 ) {
    //         up.push(A[i])
    //     } else {
    //         down.push(A[i])
    //     }
    // }
    // up.sort( (a, b) => b - a)
    // down.sort( (a, b) => b - a)
    // console.log(up, down)
    // let breakpoint = Math.min(up[0], down[0])
    // console.log('breakpoint ', breakpoint)
    // while ( breakpoint >= up.peek() ) {
    //     up.pop()
    // }
    // console.log(up)
    // while ( breakpoint >= down.peek() ) {
    //     down.pop()
    // }
    // console.log(down)
    // let merged = up.concat(down)
    // console.log(merged)
    // console.log(merged.length)
    // return merged.length


// export const fish = (A = [4, 3, 2, 1, 5], B = [0, 1, 0, 0, 0]) => {

//     console.log(` A ${A}, B ${B} `)
//     let c = B[0]
//     let s = []
//     s.push(A[0])
//     console.log(`init c ${c}, n , s ${s}, A[0] ${A[0]}, `)
//     console.log(`starting with ${s.peek()}`)
//     for (let i = 1; i < A.length; i++) {
//         let n = B[i]
//         console.log(` c ${c}, n ${n}, s ${s}, A[i] ${A[i]}, `)
//         if ( c === n ) {
//             s.push(A[i])
//             console.log(`same direction ${n}, so append ${A[i]}`)
//         }
//         else if (c !== n) {
//             if (s.peek() > A[i]) {
//                 console.log(`I am fish size ${A[i]} eaten by ${s.peek()}`)
//             }
//             while (s.peek() < A[i]) {
//                 console.log(`${A[i]} eating  ${s.peek()}, so pop ${s.peek()}  `)
//                 s.pop()
//             }
//             if (s.length === 0) {
//                 s.push(A[i])
//                 c = n
//                 console.log(`last big fish ${A[i]} on direction ${n} `)

//             }

//         }
//     }
//     console.log('result : ', s)
//     return s.length

// }


export const fish_count = (A = [4, 3, 2, 1, 5], B = [0, 1, 0, 0, 0]) => {

    console.log(` A ${A}, B ${B} `)

    const fish = (idx, siz, dir) => {  return { idx, siz, dir,
                print () {
                    return  ` ${this.siz} ${this.dir} `
                } } }


    const fishes = []


    for (let i = 0; i < A.length; i++) {
        let f = fish(i, A[i], B[i])
        fishes.push(f)
    }

    let f = fishes.shift()

    const survive = []
    survive.push(f)

    const print = () => {

        let str = survive.map((v) =>  v.print() ).join(' : ')
        return str

    }
    console.log(`${f.idx}, ${f.siz}, ${f.dir}`)

    const handle_move = (g) => {

        f = survive.peek()
        console.log(`${g.idx}, ${g.siz}, ${g.dir}, array ${print()}`)

        if (survive.length === 0) {
            console.log(` empty so append`)            
            survive.push(g)
        }
        else if (f.dir === g.dir) {
            console.log(` same direction `)            
            survive.push(g)
        }
        else if (f.dir === 0 && g.dir === 1) {
            console.log(` diamond direction, no eating `)            
            survive.push(g)
        }
        else if (f.dir === 1 && g.dir === 0) {
            if (f.siz > g.siz) {
                console.log(` survive ${f.siz} > fishes ${g.siz}, so fishes ${g.print()} die`)
                // do not push. let g die
            }
            else if (f.siz < g.siz) {
                console.log(` survive ${f.siz} < fishes ${g.siz}, so survive ${f.print()} die`)
                survive.pop()
                return true // recursive
            }
        }
        
        return false
    }


    for ( let g of fishes) {
        while (handle_move(g)) {}
    }
    console.log(` array ${print()}`)

    console.log('result : ', survive.length)
    return survive.length

}

// fish_count([ 4, 3, 2, 1, 5], [ 1, 0, 1, 0, 1] ) // 3
// fish_count([ 4, 3, 2, 0, 5], [ 0, 1, 0, 0, 0] ) // expected 2, but getting 4
// fish_count([ 4, 3, 2, 1, 5], [ 0, 1, 0, 0, 0] ) // expected 2, but getting 4
// fish_count([ 4, 3, 2, 1, 5], [ 0, 1, 1, 0, 0] ) // expected 2, but getting 3
// fish_count([ 4, 3, 2, 5, 6], [ 1, 0, 1, 0, 1] ) // expected 2, but getting 1
// fish_count([ 7, 4, 3, 2, 5, 6 ], [ 0, 1, 1, 1, 0, 1 ] ) // expected 3, but getting 7
// fish_count([ 3, 4, 2, 1, 5 ], [ 1, 0, 0, 0, 0 ] ) // expected 4
// fish_count([ 3 ], [ 1 ] ) // 1
// fish_count([ 3 ], [ 0 ] ) // 1

//  3, 4, 3, 2, 3, -1, 3, 3
//  0,0,1,1,1
// 1, 2, 1
// 7, 6, 7, 6, 6, 5, 5, 6
// 2, 1, 1, 3, 4
// 2, 1, 1, 3
export const dominator = (A = [2, 3, 4, 5, 1, 1, 1, 1]) => {

    var len = A.length
    let i = 0,
    size = 0,
    value = null;
    
    for (; i < len; i++){
        if (size === 0){
            size++;
            value = A[i];
        } else {
            value !== A[i] ?  size-- : size++;
        }
        console.log(' ', i, A[i], size, value)        
    }
    


    i = 0
    let count =  0
    let breakpoint = Math.floor(A.length / 2) + 1 
    console.log('breakpoint ', breakpoint)
    while (count < breakpoint && i < A.length) {
        if (value === A[i]) {
            count++
        }
        i++
    }
    console.log(count)

    return breakpoint === count ? A.indexOf(value) : -1




    // size = A.filter(x => x === value).length

    // if (size > (A.length / 2)) {
    //     return A.indexOf(value) 
    // } else {
    //     return -1
    // }

    // let s = A.slice()
    // s = s.sort( (a, b) => b - a)
    // // console.log(s)
    // let l = Math.floor( s.length / 2 )
    // // console.log(l)
    // let a = -1
    // for (const [i, x] of s.entries()) {
    //     let skip = false
    //     let jump = i+l
    //     if (l > 1 && i === l) {
    //         break
    //     }
    //     if (i > 0 && x === s[i-1]) {
    //         skip = true
    //     }
    //     else if (x === s[jump]) {
    //         // console.log(x, i, jump, s[jump], 'breaked')
    //         a = A.indexOf(x)
    //         break
    //     } 
    //     // console.log(x, i, jump, s[jump], skip ? 'skipped' : '')
    // }

    // // console.log('a ', a)
    // return a

}

// console.log(dominator())

// 2, 3, 4, 5, 1, 1, 1, 1, 1

export const dominator2 = (A = []) => {
    let mp = new Map()

    if (A.length < 1) {
        return -1
    }
  
    A.forEach(x => {
        mp.set(x,  (mp.get(x) || 0) + 1)
    })

    // console.log(mp.values())
    let breakpoint = Math.floor(A.length / 2) + 1 
    let max = [...mp.values()].reduce( (a, e) => e > a ? e : a)
    // console.log(` breakpoint ${breakpoint}, max ${max}  `)
    if (max < breakpoint) {
        return -1
    }

    let maxkey = [...mp].find(  ([k, v]) => v === max )[0]

    // console.log(` maxkey ${maxkey} `)
    return A.indexOf(maxkey)
    
}

// console.log(dominator2())
// 2, 3, 4, 4, 4, 4
// 4, 3, 4, 4, 4, 2
export const equileader = ( A = [ 4, 3, 4, 4, 4, 2 ]) => {
    //console.log(A)
    let len = A.length
    let equileaders = 0

    let leader = A[0]
    let ctr = 1

    for (let i = 1; i < A.length; i++) {
        //console.log('[ ', i, A[i], ctr, leader) 
        if (A[i] == leader) {
            ctr++;
        }
        else {
            ctr--;
        }
        if (ctr == 0) {
            ctr = 1;
            leader = A[i]
        }
        //console.log('  ', i, A[i], ctr, leader) 
    }

    let total = 0
    for (let i of A) {
        if (i == leader) {
            total++
        }
    }
    //console.log(`total ${total} ${total <= ( len / 2 )}`)

    if (total <= ( len / 2 )) return 0 // impossible

    let leaders_left = 0

    for (let i = 0; i < A.length; i++) {
        if ( A[i] === leader ) {
            leaders_left++
        }
        let leaders_right = total - leaders_left
        let avgleft = 1.0 * (i+1) / 2
        let avgright = (len - i - 1) / 2

        if (leaders_left > avgleft  &&  leaders_right > avgright ) {
            equileaders++
        }

        //console.log(`i ${i} A[i] ${A[i]} leader ${leader} leaders_left ${leaders_left} ${ (avgleft).toFixed(1)}  leaders_right ${leaders_right}  ${(avgright).toFixed(1)} equileaders ${equileaders}`)
        


    }

    return equileaders


}

// console.log(equileader())

    // //start from i=1 because slice can't start at index 0
    // for(int i = 1; i < A.length-1; i++) { 
    //     slice1LocalMax[i] = Math.max(slice1LocalMax[i-1] + A[i], 0); 
    // } 
    // //start from i=A.length-2 because slice can't end at index A.length-1 
    // for(int i = A.length-2; i > 0; i--){
    //   slice2LocalMax[i] = Math.max(slice2LocalMax[i+1]+A[i], 0);
    // }
// 3, 2, 6, -1, -1, 4, 5, -1, 2    
export const maxdoubleslicesum = (A = [ 1, 2, 3, 4, 5, 6, 7, 8]) => {
    let max1 = []
    let max2 = []
    //console.log(A)
    A.forEach((e,i) => {
        max1[i] = 0
        max2[i] = 0
    });

    for (let i = 1; i < A.length -1; i++) {
        max1[i] = Math.max(max1[i-1]  + A[i],0)
        //console.log(` i ${i} A[i] ${A[i]} max1[i] ${max1[i]} `)
    }
    //console.log(max1)

    for (let i = A.length-2; i > 0; i--) {
        max2[i] = Math.max(max2[i+1]  + A[i],0)
        //console.log(`| i ${i} A[i] ${A[i]} max2[i] ${max2[i]} `)
    }
    //console.log(max2)

    let maxdss = 0

    for (let i = 1; i < A.length-1; i++) {
        maxdss = Math.max(maxdss, max1[i-1] + max2[i+1])
        //console.log(`i ${i-1} ${i+1} maxdss ${maxdss} ${max1[i-1]} ${max2[i+1]} ${ max1[i-1] + max2[i+1] } `)
        
    }
    
    return maxdss


}

// console.log(maxdoubleslicesum())


export const maxprofit = (A = [ 23171 ,	21011 ,	21123 ,	21366 ,	21013 ,	21367 ] ) => {

    // console.log(A)

    let m = 0
    let l = A[0]

    for (const a of A) {
        l = Math.min(l, a)
        m = Math.max(m, a-l)
        // console.log(` a ${a} l ${l} m ${m} `)        
    }

    return m



}

// console.log(maxprofit())
// 1, 4, -2, 3, 1 -1, 1

export const maxslicesum = (A = [ 5, -7, 3, 5, -2, 4, -1 ]) => {


    console.log(A)

    let l = A[0]
    let m = A[0]
    let c = A[0]
    let n = A[0]

        console.log(` i 0, c ${c}, n ${n}, l ${l}, m ${m} `)        
    for (let i = 1; i < A.length; i++) {
        c = A[i]
        n = l + c
        l = Math.max(c, n)
        m = Math.max(m, l)
        console.log(` i ${i}, c ${c}, n ${n}, l ${l}, m ${m} `)        
    }    
    
    return m


}

export const nformat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'decimal',
  }).format(value);

// console.log(maxslicesum( [ 5, -7, 3, 5, -2, 4, -1 ])) // 10
// console.log(maxslicesum( [ -2, -3, 4, -1, -2, 1, 5, -3 ])) // 7
// console.log(maxslicesum( [ 3, 2, -6, 4, 0 ])) // 5
// console.log(maxslicesum( [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ])) // 6

export const count_factors = (N = 46) => {


    let cnt = 0
    let i = 1
    while (i * i <= N ) {
        if ( N % i === 0) {
            if ( i * i === N) {
                cnt++
            }
            else {
                cnt += 2
            }
        }
        // console.log(` i ${i}, cnt ${cnt}, ${i * i}, ${ N % i === 0 } `)  
        i++
    }

    return cnt

}

// console.log(count_factors())
// console.log(count_factors(24))
// console.log(count_factors(64))
// console.log(count_factors(15489784))

export const flags_peaks = (A = [1,5,3,4,3,4,1,2,3,4,6,2]) => {

    const create_peaks = (A) => {
        let N = A.length
        let peaks = []
        for (let i = 0; i < N; i++) {
            peaks[i] = false
        }
        for (let i = 1; i < N-1; i++) {
            if ( A[i] > A[i-1] && A[i] > A[i+1] ) {
                peaks[i] = true
            }
            
        }
        //console.log(peaks)
        return peaks

    }

    const next_peak = (A) => {
        let N = A.length
        let next = []
        for (let i = 0; i < N; i++) {
            next[i] = 0
        }
        next[N-1] = -1
        for (let i = N - 2; i > -1; i--) {
            if (peaks[i]) {
                next[i] = i
            }
            else {
                next[i] = next[ i + 1 ]
            }
        }

        //console.log(next)

        return next

    }

    const flags = (A) =>  {
        let N = A.length
        let i = 1
        let result = 0

        while ( (i -1) * i <= N) {
            let pos = 0
            let num = 0
            while ( pos < N && num < i) {
                pos = next[pos]
                if ( pos === -1 ) {
                    break
                }
                num++
                pos += i
                //console.log(`        i ${i} pos ${pos}, num ${num}, next[pos] ${next[pos]} result ${result} `) 
            }
            if (num > result) {
                result = num
            }
            // result = Math.max(result, num)
            i++
            //console.log(` i ${i} pos ${pos}, num ${num}, next[pos] ${next[pos]} result ${result} `) 
            //console.log('---------------------------------')
        }
        //console.log(` result ${result}`)
        return result

    }

    

    let peaks = create_peaks(A)
    let next = next_peak(A)

    return flags(A)

// const check = (x, A) => {
//     if (x === 0) {
//         return 0
//     }
//     let N = A.length
//     let flags = x
//     let pos = 0
//     console.log(` pos ${pos}, flags ${flags}, peaks[pos] ${peaks[pos]} `) 
//     while (pos < N && flags > 0 ) {
//         if ( peaks[pos] ) {
//             flags--
//             pos += x
//         }
//         else {
//             pos++
//         }
//         console.log(` pos ${pos}, flags ${flags}, peaks[pos] ${peaks[pos]} `) 
//     }
//     if (flags === 0) {
//         return x
//     }
//     else {
//         return check(x-1, A)
//     }

// }    
// let x = peaks.filter(x => x).length
// let chk = check(x, A)

// return chk


}

// console.log(flags_peaks())


export const min_perimeter_rectangle = ( N = 16 ) => {
    // console.log(N)
    let a = Math.floor(Math.sqrt(N))
    // console.log(a)
    while (a > 0)  {
        if (N % a === 0) {
            break
        }
        else {
            a--
        }
        //console.log(a)
    }
    let b = N / a
    //console.log(b)
    let r = 2 * (a + b)
    //console.log( r )

    return r

}


// console.log(min_perimeter_rectangle())
// console.log(min_perimeter_rectangle(30))
// console.log(min_perimeter_rectangle(1))
// console.log(min_perimeter_rectangle(10000000))


// 5, 6, 7, 6, 5, 4, 3, 1
// 7, 6, 5, 4, 3, 1, 2, 3
// 8, 7, 6, 5, 4, 5, 1
// 1, 2, 1, 3, 5, 6, 4


export const findpeak = (s) => {
    let n = s.length
    let s2 = Array.from( {length:s.length}, (v,k) => k)
    console.log(s2)
    console.log(s)
    const find2 = (l, r) => {
        if (l >= r) {
            if ( l >= n-2 ) {
                return -1
            }
            else {
                l = Math.floor( (l + n) / 2  )   
                r = n - 1
                // console.log(`: l ${l} r ${r}  `)
                // return find2(l, r)         
            }
        } else {
            let m = (l + r + 1) / 2
            m = Math.floor(m)
            console.log(` l ${l} r ${r} m ${m} s[m] ${s[m]} `)

            if (s[m - 1] > s[m]) {
                r = m -1
            } else {
                l = m
            }
            if ( s[m - 1] < s[m] && s[m] > s[ m + 1] ) {
                return m
            }
        }
        return find2(l, r)

    }

    let l = 0
    let r = n - 1
    let a = find2(l, r)    
    console.log(`pos ${a}, value :  ${s[a]} `)
    return a

}

// console.log(findpeak([ 5, 6, 7, 6, 5, 4, 3, 1 ]))
// console.log(findpeak([ 7, 6, 5, 4, 3, 1, 2, 3 ]))
// console.log(findpeak([ 8, 7, 6, 5, 4, 5, 1 ]))
// console.log(findpeak([ 1, 2, 1, 3, 5, 6, 4 ]))

// 5, 6, 7, 6, 5, 4, 3, 1
// 7, 6, 5, 4, 3, 1, 2, 3
// 8, 7, 6, 5, 4, 5, 1
// 1, 2, 1, 3, 5, 6, 4

// let l = 0
// let r = n - 1
// while (l < r) {
//     let m = (l + r + 1) / 2
//     m = Math.floor(m)
//     console.log(`[ l ${l} r ${r} m ${m} s[m] ${s[m]} `)
//     if (s[m - 1] > s[m]) {
//         r = m -1
//     } else {
//         l = m
//     }
//     console.log(`  l ${l} r ${r} m ${m} s[m] ${s[m]} `)
// }

export const peaks_blocks = (A = [ 1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2 ]) => {
    let n = A.length
    let s = Array.from( {length:A.length}, (v,k) => k)
    // console.log(s)
    // console.log(A)    
    let peaks = []
    for (let i = 1; i < n - 1; i++) {
        if (A[i - 1 ] < A[i] && A[i] > A[i+1] ) {
            peaks.push(i)
        }
    }

    // console.log(peaks)

    if (peaks.length === 0) {
        return 0
    }

    
    for (let size = peaks.length; size >=0; size--) {
        if ( n % size !== 0) {
            continue
        }
        let found = Array.from( {length:size}, (v,k) => 0)
        let count = 0
        let block_size = Math.floor(n / size)
        for (const peak of peaks) {
            let block_nr = Math.floor(peak / block_size)
            if ( found[block_nr] === 0) {
                found[block_nr] = 1
                count++
            }
            // console.log(`  size ${size},  block_size ${block_size},  block_nr ${block_nr},  count ${count},  peak ${peak},   `)            
        }
        // console.log(found)
        if (count === size) {
            return size
        }

    }
    return 0
 
}

// console.log(peaks_blocks())


export const count_non_divisors = (A = [3, 1, 2, 3, 6]) => {
    let N = A.length
    console.log(N)

    let mp = new Map()
    A.forEach((v,i) => {
        mp.set(v, (mp.get(v) || 0 ) + 1)
    })
    console.log(mp)

    let divs = new Map()

    for (const n of mp.keys()) {
        console.log('-------------', n)
        let sum = 0
        let j = 1
        while ( j * j <= n) {
            if ( n % j === 0) {
                if (mp.has(j)) {
                    sum += mp.get(j)
                    console.log('mp.has(j) ', j, mp.get(j))
                }
                let k = n / j
                if ( k !== j) {
                    if (mp.has(k)) {
                        sum += mp.get(k)
                        console.log('mp.has(k) ', k, mp.get(k))
                    }
                }
                console.log(j*j, j, k, sum )
            }
            j++
        }
        divs.set(n, N - sum)
        console.log(N - sum, divs)

       
    }

    let res = []
    A.forEach((v,i) => {
        res[i] = divs.get(v)
    }) 
    return res

}

// console.log(count_non_divisors())

export const count_non_divisors2 = (A = [3, 1, 2, 3, 6]) => {

    var result = [];
    var max = 0;
    var i = 0;
    var arr = JSON.parse(JSON.stringify(A));
    console.log(arr)
    arr.sort(function(a, b) {
        return a - b;
    });

    console.log(arr)
    
    max = arr[arr.length - 1];
    var divs = [];
    var totals = [];
    
    for(i=0; i<=max; i++) {
        divs[i] = false;
        totals[i] = 0;
    }
    
    for(i=0; i<A.length; i++) {
        var total = 0;
        var j = 0;
        var k = 0;
        
        divs[A[i]] = true;
        totals[A[i]]++;
    }

    console.log(divs)
    console.log(totals)
    
    for(i=0; i<A.length; i++) {
        for(k=2; A[i]*k<=max; k++) {
            if(divs[A[i]*k]) {
                totals[A[i]*k]++;
                console.log(i, A[i], k, A[i]*k, totals[A[i]*k] )
            }
        }
    }
    
    for(i=0; i<A.length; i++) {
        result.push(A.length - totals[A[i]]);
        console.log(A[i], totals[A[i]])
    }    
    
    return result;
}

// console.log(count_non_divisors2())

export const count_semi_primes = ( N = 26, P = [1, 4, 16], Q = [26, 10, 20]) => {

    let seq = Array.from( {length:N+1}, (v,k) => k)


    let semi = new Set()
    let sieve = Array.from( {length:N+1}, (v,k) => 1)
    sieve[0] = 0
    sieve[1] = 0
    // console.log(sieve)

    let i = 2
    while (i*i <= N) {
        if ( sieve[i] === 1 ) {
            for ( let j = i * i; j <= N+1; j += i) {
                sieve[j] = 0
                // console.log(` ----  i ${i},  i*i ${i*i},  j ${j}, `)
            }
        }
        i++
    }
    // console.log(seq)
    // console.log(sieve)

    let semi2 = Array.from( {length:N+1}, (v,k) => 0)

    i = 2
    while (i*i <= N) {
        if ( sieve[i] === 1 ) {
            for ( let j = i * i; j <= N+1; j += i) {
                // console.log(` ----  i ${i},  j ${j}, j/i ${j/i}, sieve[j/i] ${sieve[j/i]} `)
                if (sieve[j/i] === 1) {
                    semi2[j] = 1
                    semi.add(j)
                }
            }
        }
        i++
    }
    // console.log(semi)        
    // console.log(seq)
    // console.log(semi2)       
    i = 0
    semi2.forEach( (v,x) => {
        semi2[x] = (v === 1) ? ++i : i
    })
    
    // console.log(semi2)   
    

    let iter = Array.from( {length:Q.length}, (v,k) => k)
    // console.log(iter)
    let result = []

    for (const i of iter) {
        result.push(semi2[Q[i]] - semi2[P[i] - 1])
        // console.log(i, semi2[Q[i]], semi2[P[i] - 1], result.peek())
    }
    // console.log(result)        



}

const gcd = (a, b) => {
    if (b === 0) {
        return a
    }
    return gcd(b, a % b)
}

// console.log(count_semi_primes())

export const chocobynum = (N, M) => {

    let mygcd = gcd(N, M)

    let n = N / mygcd

    console.log(N, M, mygcd, n)

    return n

}

// console.log(chocobynum(10, 4))
// console.log(chocobynum(7, 4))
// console.log(chocobynum(9, 3))
// console.log(chocobynum(4, 7))
// console.log(chocobynum(3, 9))


export const common_prime_divisors = (A, B) => {
    console.log(A, B)
    const remove_common_prime_divisors = (x, y) => {
        while (x !== 1) {
            let gcdv = gcd(x, y) 
            if ( gcdv === 1 ) {
                break
            }
            let z = x
            x /= gcdv
            console.log(z, y, gcdv, x)
        }
        return x
    }

    const has_same_prime_divisors = (x, y) => {
        let gcdv = gcd(x, y)
        x = remove_common_prime_divisors(x, gcdv)
        console.log('x ', x, gcdv)
        if ( x !== 1) {
            return false
        }
        y = remove_common_prime_divisors(y, gcdv)
        console.log('y ',y)
        return y === 1
    }

    let iter = Array.from( {length:B.length}, (v,k) => k)
    let count = 0

    for (const i of iter) {
        if ( has_same_prime_divisors(A[i], B[i] )) {
            count++
        }
        console.log('count ', i, A[i], B[i], count)
    }    
    return count


}

// console.log(common_prime_divisors([ 15, 10, 3 ], [ 75, 30, 5 ]))

export const ladder = (A, B) => {
    console.log(A, B)
    let l = A.length
    let max = Math.max(...A)
    console.log(max)

    let fib = []
    fib[0] = 1
    fib[1] = 1
    for (let i = 2; i <= max; i++) {
        fib[i] = (fib[i-1] + fib[i-2]) % (1 << 30)
    }
    console.log(fib)

    let results = []
    for (let i = 0; i < l; i++) {
        console.log(A[i], fib[A[i]], ( 1 << B[i] ),  fib[A[i]] / (1 << B[i]), fib[A[i]] % (1 << B[i]) )
        results[i] =  fib[A[i]] % (1 << B[i]); // where, "1 << B[i]" means 2^B[i]
    }    
    console.log(results)
    return results

}

// console.log(ladder( [ 4, 4, 5, 5, 1 ], [ 3, 2, 4, 3, 1 ] ))

export const min_max_division = (K, M, A) => {
    console.log(`min max division`)
    console.log(`----------------`)
    console.log(K, M, A)

    const divisable = (mid, k, a) => {
        let sum = 0
        for (let i = 0; i < a.length; i++) {
            sum += a[i]
            if ( sum > mid) {
                sum = a[i]
                k--
            }
            if ( k < 0 ) {
                console.log(false)
                return false
            }
            console.log('------', a[i], mid, k, sum)
        }
        console.log(true)
        return true
    }

    let min = 0
    let max = 0
    for (let i = 0; i < A.length; i++) {
        max += A[i]
        min = Math.max(min, A[i])
        console.log(A[i], min, max)
    }
    
    let result = max
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        console.log(` min ${min},  max ${max},  mid ${mid},  result ${result}   ` )
        if (divisable(mid, K - 1, A)) {
            max = mid - 1
            result = mid
        } else {
            min = mid + 1
        }
    }
    return result



}

// console.log(min_max_division(3, 5, [ 2, 1, 5, 1, 2, 2, 2 ])) 


export const nailing_planks = (a, b, c) => {

    const getMinIndex = (str, end, preindex) => {
        console.log(` str ${str} end ${end} preindex ${preindex} `)
        let min = 0
        let max = mp.size - 1
        let minx = -1
        while ( min <= max ) {
            
            let mid = Math.floor( (min + max) / 2 )
            console.log(` min ${min}, mid ${mid}, max ${max}, start ${str}, nails[mid].value ${nails[mid].value}, end ${end},  minx ${minx}  `)

            if (nails[mid].value < str ) {
                min = mid + 1
            } else if (nails[mid].value > end) {
                max = mid - 1
            } else {
                max = mid - 1
                minx = mid
            }

        }

        if (minx === -1) {
            return -1
        }


        let minxo = nails[minx].index

        console.log(` minx ${minx}, minxo ${minxo} `)

        for (let i = minx; i < mp.size; i++) {
            console.log(` i ${i},  minxo ${minxo}, preindex ${preindex},   nails[i].index ${nails[i].index},   end ${end}  `)
            if ( nails[i].value > end ) {
                break
            }
            minxo = Math.min(minxo, nails[i].index )

            if (minxo <= preindex) {
                console.log('preindex ', preindex)
                return preindex
            }
        } 
        console.log('minxo ', minxo)
        return minxo


    }

    console.log(`nailing planks`)
    console.log(`==============`)
    console.log(a, b, c)
    let n = a.length
    let m = c.length

    let mptmp = new Map()
    c.forEach( (v, i) => mptmp.set(v, i))
    console.log(mptmp)
    let s = c.slice().sort( (a, b) => a - b)
    console.log(c)
    console.log(s)
    let mp = new Map()
    s.forEach( v => mp.set(v, mptmp.get(v) ) )
    console.log(mp)

    let nails = []
    mp.forEach( (v,i) =>  nails.push({ value : i, index : v}) )
    console.log(nails, n )



    let result = 0
    for (let i = 0; i < n; i++) {
        result = getMinIndex(a[i], b[i], result)
        if ( result === -1 ) {
            return -1
        }

    }

    return result + 1


}

// console.log(nailing_planks( [ 1, 4, 5, 8 ],  [ 4, 5, 9, 10 ],  [ 4, 6, 7, 10, 2 ]))



export const nailing_planks_slow = (a, b, c) => {
    console.log(`nailing planks`)
    console.log(`==============`)
    console.log(a, b, c)
    let n = a.length
    let m = new Map()
    let t = 0

    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < a.length; j++) {
            let nailed = ''
            if ( ! m.get(j) ) {
                if (a[j] <= c[i] && c[i] <= b[j] ) {
                    nailed = 'nailed'
                    m.set(j, 1 )
                    t++
                    console.log(i, j, a[j], c[i], b[j], m.size, t, m, nailed  )
                    if (m.size === n) {
                        return i+1
                    }
                }
            }

        }

    }
    if (t === 0) {
        t = -1
    }
    return t

}

// console.log(nailing_planks_slow( [ 1, 4, 5, 8 ],  [ 4, 5, 9, 10 ],  [ 4, 6, 7, 10, 2 ]))

export const nailing_planks_fast = (a, b, c) => {
    console.log(`nailing planks fast`)
    console.log(`==============`)
    console.log(a, b)
    let n = a.length
    let m = c.length

    let mptmp = new Map()
    c.forEach( (v, i) => mptmp.set(v, i))
    let s = c.slice().sort( (a, b) => a - b)
    console.log('c', c)
    console.log('s', s)
    let mp = new Map()
    s.forEach( v => mp.set(v, mptmp.get(v) ) )
    console.log(mp)

    let nails = []
    mp.forEach( (v,i) =>  nails.push({ value : i, index : v}) )
    console.log(nails, n )

    let farm = []
    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = a[i]; j <= b[i]; j++ ) {
            farm[j] = i+1
        }
    }
    console.log(farm)
    let unq = []
    let count = 0
    c.forEach( v => { 
        console.log(v)
        if (farm[v] > 0) {
            unq.push(farm[v])
            count++
        }
    })
    console.log(count, unq)

}
// console.log(nailing_planks_fast( [ 1, 4, 5, 8 ],  [ 4, 5, 9, 10 ],  [ 4, 6, 7, 10, 2 ]))


export const absdistinct = (a) => {

    console.log(`abs distinct`)
    console.log(`==============`)
    console.log(a)
    let f = 0
    let r = 1
    let c = 0
    let i = a.length
    const getf = () => {
        if (a[0] < 0   ) {  
            f = a.shift()
            f = Math.abs(f)
            if ( ( f !== r && f !== Math.abs(a[0]) ) ) {
                c++
            }
            i--
            console.log(`front i ${i},  f ${f},  c ${c},  a ${a} `)
            return f
        }

    }
    const getr = () => {
        if (a[a.length - 1] >= 0) {
            r = a.pop()
            i--
            if ( r !== a[a.length - 1]  ) {
                c++
            }  
            console.log(`rear i ${i},  r ${r},  c ${c},  a ${a} `)
        
            return r
        }
    }    
    r = getr()
    f = getf()
    while (i > 0) {
        
        while (i > 0 && f >= r) {
            f = getf()
        } 
        r = getr()

    }

    return c

}

// -5, -5, -3, -2, -1, 0, 3, 3, 6 

// console.log(absdistinct([ -5, -5, 0  ]))


export const count_triangles = (A = [10, 2, 5, 1, 8, 20]) => {
    if (A.length < 3 ) {
        return 0
    }
    A = A.sort( (a, b) => a - b)
    let count = 0
    console.log(A)
    for (let i = 0; i < A.length-2; i++) {
        if (A[i] >= 0 && A[i] > A[i+2] - A[i+1]) {
            console.log(A[i], A[i+1], A[i+2])
            count++
        }
    }

    return count


}

// console.log(count_triangles())

export const max_non_overlapping_segments = (a, b) => {
    console.log(`max_non_overlapping_segments`)
    console.log(`============================`)    
    console.log(a, b)

    if (a.length < 1) {
        return 0
    }
    let cnt = 1
    let pend = b[0]

    let i = 0
    console.log(a[i],  b[i], pend, cnt)
    for (i = 1; i < a.length; i++) {
        if (a[i] > pend) {
            cnt++
            pend = b[i]
        }
        console.log(a[i],  b[i], pend, cnt)

    }


    return cnt


}

// console.log(max_non_overlapping_segments( [ 1, 3, 7, 9, 9] , [ 5, 6, 8, 9, 10 ] ))

export const tie_ropes = (k, b) => {
    console.log(`tie_ropes`)
    console.log(`=========`)    
    console.log(k, b)

    let cnt = 0
    let current = 0

    for (const a of b) {
        current += a
        if (current >= k) {
            cnt++
            current = 0
        }
        console.log(k, a, current, cnt)
    }

    return cnt

}

// console.log(tie_ropes(4, [ 1, 2, 3, 4, 1, 1, 3 ] )) // 3

export const min_abs_sum_of_two_not_working = (a) => {
    console.log(`min_abs_sum_of_two_not_working`)
    console.log(`==================`)    
    console.log(a)

    a = a.sort( (a, b) => a - b)
    console.log(a)
    let minarr = a.filter(v => v >= 0)
    console.log(minarr)
    // let min = Math.max(...minarr)
    // console.log(min)
    let maxarr = a.filter(v => v < 0)
    console.log(maxarr)
    // let max = Math.max(...maxarr)
    // console.log(max)

    let tmp = []

    const getpostive = () => {
        if (tmp.length < 2) {
            if (minarr[0]) {
                tmp.push(minarr.pop())
            }
        }
    }

    const getnegative = () => {
        if (tmp.length < 2) {
            if (maxarr[maxarr.length -1]) {
                tmp.push(maxarr.pop())
            } 
        }
    }

    getpostive()
    getnegative()
    getpostive()
    getnegative()

    console.log(tmp)

    tmp.push(0)


    return Math.abs(tmp[0] + tmp[1])

}

export const min_abs_sum_of_two_not_working2 = (A) => {
    
    console.log(`min_abs_sum_of_two_not_working2`)
    console.log(`==================`)    
    console.log(A)

    // A = A.sort( (a, b) => a - b)
    // console.log(A)

    if (!A.length) {
        return 0;
    }
    
    if (A.length === 1) {
        return A[0];
    }

    let st = new Set()

    for (const a of A) {
        if (st.size === 0) {
            st.add(a); 
            console.log("sett : ", a,  st);        }
        else {
            let stnew = new Set()
            for (let s of st) {
                stnew.add(Math.abs(s - a));
                stnew.add(Math.abs(s + a));
                console.log("stnew: ", s, a, stnew)
            }
            st = stnew;
        }
    }
    
    let absst = Array.from(st).map(se => Math.abs(se));

    console.log(absst)
    
    return Math.min.apply(null, absst);
    
}

// console.log(min_abs_sum_of_two_not_working2([  1, 4, -3 ] )) // 1
// console.log(min_abs_sum_of_two_not_working2([ -8, 4, 5, -10, 3 ] )) // 3


// export const test1 = (A) => {
    
//     console.log(`test1`)
//     console.log(`==================`)    
//     console.log(A)

    
//     return 0
    
// }

// console.log(test1( [1, 3, 6, 4, 1, 2] )) // 1



export const fizzbuzz = (n) => {
    let seq = Array.from( {length:n+0}, (v,k) => k+1)

    console.log(seq)

    for (const i of seq) {
        let d3 = i % 3 == 0
        let d5 = i % 5 == 0
        if (d3 && d5) {
            console.log("FizzBuzz")
        } else if (d5) {
            console.log("Buzz")
        } else if (d3) {
            console.log("Fizz")
        } else {
            console.log(i)
        } 

    }

}

// fizzbuzz(15)

export const sumdiagdiff = (arr) => {
    console.log(arr)
    let n = arr.length

    let l = 0
    let r = 0
    
    for (let i = 0; i < n; i++) {
        l += arr[i][i] 
        r += arr[i][n-i-1] 
        console.log(arr[i][i], arr[i][n-i-1] )
    }
    let a = Math.abs(l - r)
    console.log(a)
    return a

}

// sumdiagdiff([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])

export const countPosNegZero = (arr) => {
    console.log(arr)
    
    let pos = 0
    let neg = 0
    let zero = 0
    for (const a of arr) {
        if ( a > 0) {
            pos++
        } else if ( a < 0) {
            neg++
        } else {
            zero++
        }
        
    }
    let ans = []
    let n = arr.length
    ans.push(pos/n)
    ans.push(neg/n)
    ans.push(zero/n)

    for (const a of ans) {
        console.log(a)
    }
    return ans

}

// countPosNegZero([-4, 3, -9, 0, 4, 1])

export const staircase = (n) => {

    for (let i = 0; i < n; i++) {
        console.log('#'.repeat(i+1).padStart(n,' ') )
    }

}

// staircase(6)

export const miniMaxSum = (arr) => {
    let s = arr.sort( (a, b) => a - b)
   
    let min = 0
    let max = 0
    for (let i = 0; i < 4; i++) {
        min +=  s[i]
        max +=  s[s.length -i-1]
    }
    console.log(min + ' ' + max)

}

// miniMaxSum ( [1, 2, 3, 4, 5] )


export const climbingLeaderboard = (scores, alice) => {
    // console.log(scores, alice)

    const locateValue = (min, max, x) => {

        let mid = Math.floor( (min + max) / 2 )
        while ( min <= max ) {
           
            mid = Math.floor( (min + max) / 2 )
            // console.log(`x ${x}, min ${min}, mid ${mid}, max ${max}, mp.get(mid) ${mp.get(mid)}  `)
    
            if (mp.get(mid) > x ) {
                min = mid + 1
            } else if (mp.get(mid) < x) {
                max = mid - 1
            // } else if ( min >= max ) {
            //     console.log(` min >= max, min ${min}, mid ${mid}, max ${max} ` )
            //     return mid
            } else {
                console.log(` min >= max, min ${min}, mid ${mid}, max ${max} ` )
                return mid
            } 
    
        }
        // console.log(`while done, min ${min}, mid ${mid}, max ${max}`)
        return min

    }



    let n = scores.slice()
    let s = n.sort( (a, b) => b - a)
    const set = new Set(s)
    const mp = new Map()

    let i = 0
    set.forEach( (x) => mp.set(++i, x) )

    // console.log(mp)


    // let ans = []
    let ans2 = []

    for (const b of alice) {

        let i = 0

        let another = locateValue(1, mp.size, b)
        ans2.push(another)
   
        // const setIter = mp[Symbol.iterator]()

        // while (true)  {
        //     i++
        //     let a = mp.get(i)
        //     console.log(b, a, i)
        //     if (a === undefined ) {
        //         ans.push(i)
        //         break
        //     }
        //     else if ( b >= a ) {
        //         // console.log(b, i)
        //         ans.push(i)
        //         break                
        //     }            
        // }


    } 
    // console.log(ans)
    console.log(ans2)
    return ans2

}

// climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102] )
// climbingLeaderboard([100, 90, 90, 80, 75, 60], [50] )


// export const findmaxoccr = (n) => {

//     for (let i = 0; i < n; i++) {
//         console.log('#'.repeat(i+1).padStart(n,' ') )
//     }

// }

// staircase(6)


export const maximumOccurringCharacter = (text) => {

    // console.log(text)

    let a = text.split('')
    // console.log(a)

    a = a.sort()
    // console.log(a)

    let m = 1
    let l = a[0]
    let c = 1
    let n = l

    for (let i = 1; i < a.length; i++) {
        n = a[i]
        if (a[i -1] !== n) {
            c = 1
        }
        else {
            c++
        }
        if (m < c) {
            m = c
            l = n
        }
        // console.log(` n ${n}, c ${c}, l ${l}, m ${m} `)
    }
    // console.log(l)

    return l




}


maximumOccurringCharacter('helloworld')