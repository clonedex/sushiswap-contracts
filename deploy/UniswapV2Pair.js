module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  await deploy("UniswapV2Pair", {
    from: deployer,
    log: true,
  })
}
module.exports.tags = ["UniswapV2Pair"]
