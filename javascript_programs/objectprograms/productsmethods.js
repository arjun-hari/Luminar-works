var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]
//array of objects

//print product names only
var product_names=products.map(item=>item.name);
console.log(product_names);

//print all product names in uppercase
var p_names=products.map(item=>item.name.toUpperCase());
console.log(p_names);

//print all products whose mrp<50
var below_fifty=products.filter(item=>item.mrp<50)
console.log(below_fifty);

//print out of stock items
var out_of_stock=products.filter(item=>item.aval_qty==0);
console.log(out_of_stock);

//print products available in price range of 50-100
var mid_products=products.filter(item=>item.mrp>50 && item.mrp<100)
console.log(mid_products);

//print all products starting with "b"
var names_with_b=products.filter(item=>item.name[0]=='b')
console.log(names_with_b);

//if mrp>50 add offer of 5% and mrp<50 offer 0%
var offers=products.filter(item=>item.mrp>50?item.offer="5%":item.offer="0%");
// products.map(item=>item.mrp>50?item["offer"]=5%:item["offer"]=0%)
console.log(offers);
console.log(products);

//costly product
var costly_product=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2);
console.log(costly_product);

//lowest price product
var low_cost_product=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2);
console.log(low_cost_product);


let add=(...args)=>args.reduce((num1,num2)=>num1+num2);
console.log(add(10,20,20,100));

//find carrot
var product_details=products.find(item=>item.name=="carrot")
console.log(product_details);

//any item available less than Rs.20
var is_available=products.some(item=>item.mrp<20)
console.log(is_available);
// any item available between Rs.30 and Rs.50
var is_any_available=products.some(item=>item.mrp>30 && item.mrp<50)
console.log(is_any_available);