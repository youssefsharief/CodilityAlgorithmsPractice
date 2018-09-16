function timeConversion(s) {
    return s.substr(0, 2) === '12' && s.substr(8, 2) === 'AM' ? `00${s.substr(2, 6)}` :
        s.substr(0, 2) === '12' && s.substr(8, 2) === 'PM' ? s.substr(0, 8) :
            s.substr(8, 2) === 'PM' ? `${parseInt(s.substr(0, 2)) + 12}${s.substr(2, 6)}` :
                s.substr(0, 8)
}

function conversion(str){
    const firstTwo = str.substring(0,2)
    const isPm = str.substring(8,10)==='PM'
    return (firstTwo == 12 ? isPm ? '00' : '12' : isPm ? Number(firstTwo) + 12 : firstTwo)  + str.substring(2,8) 
}


let r = timeConversion('12:40:22AM')
r = timeConversion('12:40:22PM')

r   