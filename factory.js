app.factory("projectfactory",function(){
var object={
getcustomerdata: function(){
var customers=[
    {id:1,name:"priya",cuspic:"pics/customerpics/priya.jpg"},
    {id:2,name:"komal",cuspic:"pics/customerpics/komal.jpg"},
    {id:3,name:"suman",cuspic:"pics/customerpics/suman.jpg"}
    ]
    return customers;
},
getemployeedata:function(){
var employees=[
    {id:101,name:"priyanka singh",address:"ghaziabad",emppic:"pics/employeepics/palkhi.jpg"},
    {id:102,name:"sumitkumar",address:"varansi",emppic:"pics/employeepics/sumitkumar.jpg"},
     {id:103,name:"piyushikumar",address:"vahnovi",emppic:"pics/employeepics/piyushikumar.jpg"},
     {id:104,name:"palkhikumar",address:"mardhuli",emppic:"pics/customerpics/suman.jpg"},
]
return employees;
},
getproductdata:function(){
var products=[
    {id:301,name:"androidPhones",propics:"pics/productpics/phone.jpg"},
     {id:302,name:"car",propics:"pics/productpics/car.jpg"},
     {id:304,name:"furniture",propics:"pics/productpics/furniture.jpg"},
     {id:303,name:"crockery",propics:"pics/productpics/crockry.jpg"}
]
return products;
}

};
return object;
});


