const Fruits = artifacts.require("Fruits");

module.exports = function(deployer) {
    deployer.deploy(Fruits);
}