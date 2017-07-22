var Insurance = artifacts.require("./Insurance.sol");
var MyToken = artifacts.require("./MyToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Insurance);
  deployer.deploy(MyToken);
};
