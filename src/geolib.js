
var pi = 3.14


var calcAreaOfTriangle = function(length,height){
    var area = (length*height)/2
    return area
}

var calcAreaOfCircle = function(radius){
    var area = radius*pi
    return area
}

var calcVolumeOfCube = function(a){
    var volume = a*a*a 
    return volume 
}

var geolib = {
    calcAreaOfTriangle: calcAreaOfTriangle,
    calcAreaOfCircle: calcAreaOfCircle,
    calcVolumeOfCube: calcVolumeOfCube
}

module.exports = geolib

var geolib = {
    calcAreaOfTriangle: function(length,height){
        var area = (length*height)/2
        return area
    },        

    calcAreaOfCircle : function(radius){
        var area = radius*pi
        return area
    },
    
    calcVolumeOfCube : function(a){
        var volume = a*a*a 
        return volume 
    }
}