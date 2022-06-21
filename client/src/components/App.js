import React, { Component } from 'react'
import getWeb3 from "../getWeb3";
import MasoomContract from "../contracts/MasoomContract.json";
import Fruits from "../contracts/Fruits.json";

export default class App extends Component {
	state = {
		contractInstance : undefined,
		account : null,
		web3 : null,
		isOwner : false
	}
	componentDidMount = async () => { 
		// FOR REFRESHING PAGE ONLY ONCE -
		if(!window.location.hash){
			window.location = window.location + '#loaded';
			window.location.reload();
		}
		try {
			// get network provider and web3 instance
			const web3 = await getWeb3();

			//use web3 to get the user's accounts
			const accounts = await web3.eth.getAccounts();
			console.log('accounts', accounts)
			// get the contract instance
			const networkId = await web3.eth.net.getId();
			const deployedNetwork = Fruits.networks[networkId];
			const instance = new web3.eth.Contract(
				Fruits.abi,
				deployedNetwork && deployedNetwork.address
			)
			console.log('network id', networkId)
			console.log('deployed network', deployedNetwork)
			this.setState({ contractInstance: instance, web3: web3, account: accounts[0] });
			console.log(instance)
			// console.log(await instance.methods.getFruits().call())

			const fruitsList = await instance.methods.getFruits().call();
			console.log(fruitsList)

		} catch (error) {
			// catch any error for any of the above operattions
			alert(`failed to load web3, accounts, or contract. check console for details!`)
			console.log(error)
		}
	}
	render() {
		if(!this.state.web3){
			return <div>Loading web3, accounts and contract...</div>
		}
		return (
			<div>hello! its working!</div>
		)
	}
}
