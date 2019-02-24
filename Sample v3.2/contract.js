const Web3 = require('web3');
const web3 = new Web3('ws://localhost:7545');
// var initMsg = "Hello!" ;
// var inboxContract = web3.eth.Contract([{"constant":true,"inputs":[],"name":"msg","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initMsg","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
// var inbox = inboxContract.new(
//    initMsg,
//    {
//      from: web3.eth.accounts[0], 
//      data: '0x608060405234801561001057600080fd5b506040516102f13803806102f18339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100a3565b5050610148565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610112565b82800160010185558215610112579182015b828111156101115782518255916020019190600101906100f6565b5b50905061011f9190610123565b5090565b61014591905b80821115610141576000816000905550600101610129565b5090565b90565b61019a806101576000396000f3fe60806040526004361061003b576000357c0100000000000000000000000000000000000000000000000000000000900480636b473fca14610040575b600080fd5b34801561004c57600080fd5b506100556100d0565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009557808201518184015260208101905061007a565b50505050905090810190601f1680156100c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101665780601f1061013b57610100808354040283529160200191610166565b820191906000526020600020905b81548152906001019060200180831161014957829003601f168201915b50505050508156fea165627a7a72305820048165daaef00046986a7689c2aa6928ae18a0c44775512023f46261dde3e7c10029', 
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
//  });

 const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDegree",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBatch",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCollege",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getScore",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSign",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_sign",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_degree",
				"type": "string"
			},
			{
				"name": "_clg",
				"type": "string"
			},
			{
				"name": "_score",
				"type": "string"
			},
			{
				"name": "_batch",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

const byteCode = '0x60806040523480156200001157600080fd5b5060405162000b5738038062000b57833981018060405260c08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b50509291906020018051640100000000811115620000f457600080fd5b828101905060208101848111156200010b57600080fd5b81518560018202830111640100000000821117156200012957600080fd5b505092919060200180516401000000008111156200014657600080fd5b828101905060208101848111156200015d57600080fd5b81518560018202830111640100000000821117156200017b57600080fd5b505092919060200180516401000000008111156200019857600080fd5b82810190506020810184811115620001af57600080fd5b8151856001820283011164010000000082111715620001cd57600080fd5b50509291906020018051640100000000811115620001ea57600080fd5b828101905060208101848111156200020157600080fd5b81518560018202830111640100000000821117156200021f57600080fd5b505092919050505085600290805190602001906200023f929190620002c9565b50846000908051906020019062000258929190620002c9565b50836001908051906020019062000271929190620002c9565b5082600390805190602001906200028a929190620002c9565b508160049080519060200190620002a3929190620002c9565b508060059080519060200190620002bc929190620002c9565b5050505050505062000378565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200030c57805160ff19168380011785556200033d565b828001600101855582156200033d579182015b828111156200033c5782518255916020019190600101906200031f565b5b5090506200034c919062000350565b5090565b6200037591905b808211156200037157600081600090555060010162000357565b5090565b90565b6107cf80620003886000396000f3fe608060405260043610610072576000357c01000000000000000000000000000000000000000000000000000000009004806317d7de7c146100775780632b261317146101075780633b1fee6c146101975780634ba5c8ca14610227578063afd82067146102b7578063cf504e0a14610347575b600080fd5b34801561008357600080fd5b5061008c6103d7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100cc5780820151818401526020810190506100b1565b50505050905090810190601f1680156100f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561011357600080fd5b5061011c610479565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561015c578082015181840152602081019050610141565b50505050905090810190601f1680156101895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a357600080fd5b506101ac61051b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ec5780820151818401526020810190506101d1565b50505050905090810190601f1680156102195780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023357600080fd5b5061023c6105bd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c357600080fd5b506102cc61065f565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561030c5780820151818401526020810190506102f1565b50505050905090810190601f1680156103395780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561035357600080fd5b5061035c610701565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039c578082015181840152602081019050610381565b50505050905090810190601f1680156103c95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561046f5780601f106104445761010080835404028352916020019161046f565b820191906000526020600020905b81548152906001019060200180831161045257829003601f168201915b5050505050905090565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b5050505050905090565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b35780601f10610588576101008083540402835291602001916105b3565b820191906000526020600020905b81548152906001019060200180831161059657829003601f168201915b5050505050905090565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106555780601f1061062a57610100808354040283529160200191610655565b820191906000526020600020905b81548152906001019060200180831161063857829003601f168201915b5050505050905090565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106f75780601f106106cc576101008083540402835291602001916106f7565b820191906000526020600020905b8154815290600101906020018083116106da57829003601f168201915b5050505050905090565b606060028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107995780601f1061076e57610100808354040283529160200191610799565b820191906000526020600020905b81548152906001019060200180831161077c57829003601f168201915b505050505090509056fea165627a7a72305820d88453ff0356cfa4ab845af39cfdb57f57773e98bc059d344d603b291120f27e0029';

async function deploy(data, callback){
	var accounts = await web3.eth.getAccounts();
	
	//data = {uid: '634656457', name: 'Bhavana', degree: 'Btech', clg: 'TKR', pcent: '80'};

    var contract = await new web3.eth.Contract(abi)
        .deploy({data: byteCode, arguments: [data.sign, data.name, data.degree, data.clg, data.score, data.batch]})
		.send({ gas: '1000000', from: accounts[0] });
	console.log('Contract deployed to', contract.options.address);
	callback(contract.options.address);
	console.log("DEPLOY: ", await contract.methods.getName().call());
}

async function getDeployedContract(address, callback){
	//var accounts = await web3.eth.getAccounts();
	var contract = await new web3.eth.Contract(abi, address);
	var name = await contract.methods.getName().call();
	var degree = await contract.methods.getDegree().call();
	var clg = await contract.methods.getCollege().call();
	var score = await contract.methods.getScore().call();
	var batch = await contract.methods.getBatch().call();
	var data = {name: name, degree: degree, college: clg, score: score, batch: batch};
	callback(data);
	console.log("FIND: ", data);
	console.log("Find Degree", await contract.methods.getDegree().call())
}

module.exports = {deploy: deploy, getDeployedContract: getDeployedContract};