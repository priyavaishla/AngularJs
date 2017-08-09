app.controller("costumercontroller",function($scope,projectfactory){

$scope.customs= projectfactory.getcustomerdata();
 $scope.employes= projectfactory.getemployeedata();   
$scope.product= projectfactory.getproductdata();
});




/*app.controller("friendctrl",function($scope,friendfactory){
   $scope.friends  =  friendfactory.getFriendsData();
});*/