const inpSearch = document.getElementById("search");

inpSearch.addEventListener("keyup",  ()=>{
    const inpValue = inpSearch.value;
    const spanSearch = document.querySelectorAll(".container span");

    spanSearch.forEach((sp , index)=>{
        if(sp.innerHTML.toLowerCase().includes(inpValue)){
            sp.style.display = "block"
        }else{
            sp.style.display = "none"
        }
    })
    
});

