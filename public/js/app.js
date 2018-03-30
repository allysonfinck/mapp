const app = angular.module("Mapd", []);

app.controller("MainController", ['$http', function($http){
  const controller = this;
  this.maps = [];

  this.createMap = ()=>{
    $http({
      method: 'POST',
      url: '/maps',
      data: {
        name: this.name,
        description: this.description,
        lat: this.lat,
        long: this.long
      }
    }).then((response)=>{
      controller.getMaps();
    }, ()=>{
      console.log('error');
    })
  }

  this.getMaps = ()=>{
    $http({
      method: 'GET',
      url: '/maps'
    }).then((response)=>{
      controller.maps = response.data;
    }, (error)=>{
      console.log('error');
    })
  }

  this.getMaps();

}])
