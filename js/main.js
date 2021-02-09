var app=angular.module("myApp",[])
app.controller("myCtr",function($scope){
$scope.friends=[{name:'med',desc:'weled fatma'},
                 {name:'mouna',desc:'9atouset nome'},
                 {name:'amine',desc:'khouya'},
                 {name:'fatma',desc:'mwakletni el 3osban ya nari'},
                 {name:'sadek',desc:'chtanja7 bac montionner nchallah'}];

$scope.clicme=function(name,desc){
    $scope.updatname=name;
    $scope.updatdesc=desc;
}

}) 