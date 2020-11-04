const SimplifiedSwapRouter = artifacts.require("SimplifiedSwapRouter");

module.exports = function (deployer) {
  deployer.deploy(SimplifiedSwapRouter);
};
