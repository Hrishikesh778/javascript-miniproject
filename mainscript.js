let profilename = document.getElementById('profilename')
let localData = JSON.parse(localStorage.getItem("user1"))
let isloggedinfname = localStorage.getItem("isloggedinfname")
let isloggedinlname = localStorage.getItem("isloggedinlname")


//    let filterData = localData.filter((val)=>{
//                 return val.email1 == email.toLowerCase()
//                 // console.log(val,"fdbfg")
//      })


let fletter = isloggedinfname
let lletter = isloggedinlname

console.log(fletter.toUpperCase(), lletter.toUpperCase())

profilename.innerHTML = fletter.toUpperCase()+" "+ lletter.toUpperCase()



function logout() {
    localStorage.removeItem("isloggedinfname")
    localStorage.removeItem("isloggedinlname")
    window.location.href = "index.html"
}