var Brands = /*#__PURE__*/ function(Brands) {
    Brands["AUDI"] = "Audi";
    Brands["SKODA"] = "Skoda";
    Brands["MERCEDES"] = "Mercedes";
    return Brands;
}(Brands || {});
const audiA3 = {
    brand: "Audi",
    model: 'A3',
    year: 2024,
    start: ()=>{
        console.log('Car started');
    }
};
function carBranUnique(item) {
    return item.brand;
}
console.log(audiA3.brand);
function getCarUniqueBrand(item) {
    return item.brand;
}

//# sourceMappingURL=frontendPro.2a126ca1.js.map
