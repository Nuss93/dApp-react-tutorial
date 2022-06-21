const MasoomContract = artifacts.require("MasoomContract");

module.exports = function(deployer) {
    deployer.deploy(MasoomContract);
}