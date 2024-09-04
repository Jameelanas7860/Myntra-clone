let itemcontainer = document.querySelector('#item-container')

let innerHTML='';
items.forEach (item =>{
   
    innerHTML +=`
                    <div class="col-lg-2 col-md-4 mb-4">
                        <div class="card border-0 rounded-0 shadow">
                        <img src="${item.image}" class="card-img-top rounded-0" >
                            <div class="card-body">
                                    <h6 class="card-title fw-bold mb-0">${item.company}</h6>
                                    <p class="card-text fs-14 fw-400 mb-0">${item.title}</p>
                                    <div>
                                        <span class="fw-bold">Rs.${item.dis_price}</span>
                                        <del class="fs-14">Rs.${item.price} </del> 
                                        <span class="text-orange fs-14 fw-400">(${item.discount}off)</span>
                                    </div>
                                        <div class="w-100">
                                        <button class="w-100 btn btn-success" onclick"addtocart(${item.id})">Add to Cart</button>
                                        </div>
                                </div>
                        </div>  
                    </div>
                `
})
itemcontainer.innerHTML = innerHTML;


// add to cart //
let cartitems =[];

function addtocart(itemid){
    cartitems.push(itemid)
    carticon()
}

function carticon(){
    let cartnumber =document.getElementById('cartnumber');
    cartnumber.innerText =cartitems.length;
}
