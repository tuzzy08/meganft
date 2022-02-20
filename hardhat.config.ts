require('dotenv').config();
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.4',
	networks: {	
		matic: {
			url: process.env.POLYGON_TESTNET,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	typechain: {
		outDir: './types',
		target: 'ethers-v5',
		alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
		externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
	},
};
