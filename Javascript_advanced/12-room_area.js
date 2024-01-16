let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
    
};
// bind pr que 'this' dans getArea se lie toujours à roomDimensions
const boundGetArea = roomDimensions.getArea.bind(roomDimensions)

console.log(boundGetArea()); 
