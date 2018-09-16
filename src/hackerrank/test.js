function conversion(str){
    const firstTwo = str.substring(0,2)
    const isPm = str.substring(8,10)==='PM'
    return (firstTwo == 12 ? isPm ? '00' : '12' : isPm ? Number(firstTwo) + 12 : firstTwo)  + str.substring(2,8) 
}


const y = conversion('10:05:45PM')
y