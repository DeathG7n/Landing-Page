let hamEl = document.getElementById('ham-el')
let headEl = document.getElementById("head-el")
hamEl.addEventListener("click",function(){
    console.log("hey")
    let div = document.createElement("div")
    div = ` <nav>
                <a href="">Articles</a>
                <a href="">Chats</a>
                <a href="">Awards</a>
                 <a href="">About</a>
            </nav>
            <button>Get in touch</button>
            `
    headEl.innerHTML = div
    hamEl.addEventListener("mousemove",function(){
        div = `<h4>Johnathan Specter</h4>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="hide-for-desk" id="ham-el">
                <path d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z" fill="white"/>
                </svg>
                `
        headEl.innerHTML = div
    })
})