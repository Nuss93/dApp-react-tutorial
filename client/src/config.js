export const FRUITS_ADDRESS = "0x6Fd6CA0FB4703033bab0A8206E7AeF6602Dc9b0d"
export const FRUITS_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fruitName",
				"type": "string"
			}
		],
		"name": "addFruit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "fruitIndex",
				"type": "uint256"
			}
		],
		"name": "deleteFruit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFruits",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "fruitIndex",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "newFruitName",
				"type": "string"
			}
		],
		"name": "updateFruit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]