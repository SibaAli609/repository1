fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
            .then(res => res.json())
            .then(res => Tony(res))

let Div = document.getElementById('root')

function Tony(res)
{
console.log(res);
for (let index = 0; index < res.length - 42; index++) {
   
    Div.innerHTML +=
`<div class="row d-flex justify-content-center align-items-center text-center">
<div class="col">
<div class="d-flex flex-column justify-content-center align-items-center text-center">
<img style="width : 75% " src="${res[index].simple_thumb}"/>
<h4 style="font-size: 20px" class="titl">${res[index].title}</h4>
<p style="font-size: 20px" class="auth">${res[index].author}</p>
</div>
</div>
</div>`   
}
}


fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
            .then(res => res.json())
           .then(res => Sib(res))

let Divv = document.getElementById('roo')
function Sib(res)
{
console.log(res);

    Divv.innerHTML =
 `<div>
<div class=" row d-flex m-5 p-5">
<div class=" col">
<img style="width : 90% " src="${res.simple_thumb}"/>
</div>
<div class=" col">
                    <h2>Best Selling </h2> <h2 class="line">Book</h2>
                    <br>
                    <br>
                    <p style="font-size: 20px">${res.authors}</p>
                    <h4 style="font-size: 20px">${res.title}</h4>
                    <br>
                    <p>Lorem ipsum dolor sit, amet consectetur</p>
                    <p>adipisicing elit. Ab ducimus </p>
                    <p>magni quis, eu</p>
                    <p> <span class="fw-bold">Shop it Now </span> <i class="fa-solid fa-arrow-right "></i></p>
 </div>
</div>
 </div>`
}

fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
            .then(res => res.json())
            .then(res => Book(res))

let Divvv = document.getElementById('book')
function Book(res)
{
console.log(res);
for (let index = 0; index < res.length - 38; index++) {
   
    Divvv.innerHTML +=
`
<div class="col-lg-3 text-center">
<img style="width : 70% " src="${res[index].simple_thumb}"/>
<h4 style="font-size: 20px" class="titl">${res[index].title}</h4>
<p style="font-size: 20px" class="auth">${res[index].author}</p>
</div>

</div>`   
}
}



           