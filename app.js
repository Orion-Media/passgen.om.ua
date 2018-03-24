if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0 //floor if number or convert non-number to 0;
        if ( this.length > targetLength )
            return String(this)
        padString = String(padString || ' ')
        targetLength = targetLength - this.length
        if ( targetLength > padString.length )
            padString += padString.repeat(targetLength / padString.length) //append to original to ensure we are longer than needed
        return padString.slice(0, targetLength) + String(this)
    }
}

/*global angular */
let app = angular.module('app', ['ngMaterial'])

app.config(function($mdThemingProvider, $mdIconProvider, $mdAriaProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('blue', {
            'default': '700'
        })
    $mdIconProvider
        .defaultFontSet('FontAwesome')
        .fontSet('fa', 'FontAwesome')
   // Globally disables all ARIA warnings
   $mdAriaProvider.disableWarnings()
});

app.controller('controller', ['$scope', '$mdMedia', '$mdSidenav', function controller($scope, $mdMedia, $mdSidenav) {
    // Sidenav
    $scope.sidenav = true
    $scope.isLockedOpenSidenav = function() {
        return $scope.sidenav && $mdMedia('gt-md')
    }
    $scope.toggleSidenav = function() {
        if ( $mdMedia('gt-md') )
            $scope.sidenav = !$scope.sidenav
        else
            $mdSidenav('left').toggle()
    }
    // Password Generator
    $scope.input = { len: 6 }
}]);