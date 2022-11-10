angular.module('myApp' , []).controller('myCtrl' , function($scope){
    $scope.names = [
        {name:'Mani' , country:'Norway'},
        {name:'Beni' , country:'Spain'},
        {name:'Mana' , country:'Iran'}
    ];
});