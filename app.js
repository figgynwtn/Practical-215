var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12]

function loopList(values) {
    let that = this
    this.ele = document.createElement("div")
    this.print = document.createElement("div")
    if (values < 10) {
        this.print.innerHTML = "The value is " + values + " and is below 10"
    } else if (values.length > 5) {
        this.print.innerHTML = "The value is " + values + " and its character length is more than 5"
    } else if (values === 15) {
        this.print.innerHTML = " the value is exactly 15"
    } else {
        this.print.innerHTML = " normal"
    }
    this.print.addEventListener("click", function () {
        that.changeColor()
    })
    this.ele.appendChild(this.print)
    document.body.appendChild(this.ele)
}

loopList.prototype.changeColor=function(){
    this.print.style.color="blue"
}

for (let i=0; i<stringers.length; i++ ){
    new loopList(stringers[i])
}