/*const contractAddress = '0x'; // Replace with your deployed contract address
const contractABI = [[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_candidateNames",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "CandidateAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateIndex",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "candidateIndex",
				"type": "uint256"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidateCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]]; // Replace with your contract ABI

// Connect to the Ethereum network
const web3 = new Web3(Web3.givenProvider);

// Load the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to display candidates
async function displayCandidates() {
    const candidateCount = await contract.methods.getCandidateCount().call();
    const candidatesDiv = document.getElementById('candidates');
    candidatesDiv.innerHTML = ''; // Clear previous candidates

    for (let i = 0; i < candidateCount; i++) {
        const candidate = await contract.methods.candidates(i).call();
        const candidateElement = document.createElement('div');
        candidateElement.classList.add('candidate');
        candidateElement.textContent = `Name: ${candidate.name}, Votes: ${candidate.voteCount}`;
        candidatesDiv.appendChild(candidateElement);
    }
}

// Function to add a new candidate
async function addCandidate() {
    const candidateNameInput = document.getElementById('candidateName');
    const candidateName = candidateNameInput.value.trim();

    if (candidateName === '') {
        alert('Please enter a candidate name');
        return;
    }

    await contract.methods.addCandidate(candidateName).send({ from: web3.eth.defaultAccount });
    candidateNameInput.value = '';
    displayCandidates();
}

// Function to vote for a candidate
async function vote() {
    // Replace 0 with the candidate index you want to vote for
    await contract.methods.vote(0).send({ from: web3.eth.defaultAccount });
    displayCandidates();
}

// Load candidates when the page loads
window.addEventListener('load', async () => {
    // Prompt the user to connect their wallet
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];

    displayCandidates();
});
*/
// Instantiate Web3
const web3 = new Web3(Web3.givenProvider);

// Replace these with your actual contract address and ABI
const contractAddress = '0x';
const contractABI = [[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_candidateNames",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "CandidateAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateIndex",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "candidateIndex",
				"type": "uint256"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidateCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]];

// Load the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to display candidates
async function displayCandidates() {
    const candidateCount = await contract.methods.getCandidateCount().call();
    const candidatesDiv = document.getElementById('candidates');
    candidatesDiv.innerHTML = ''; // Clear previous candidates

    for (let i = 0; i < candidateCount; i++) {
        const candidate = await contract.methods.candidates(i).call();
        const candidateElement = document.createElement('div');
        candidateElement.classList.add('candidate');
        candidateElement.textContent = `Name: ${candidate.name}, Votes: ${candidate.voteCount}`;
        candidatesDiv.appendChild(candidateElement);
    }
}

// Function to add a new candidate
async function addCandidate() {
    const candidateNameInput = document.getElementById('candidateName');
    const candidateName = candidateNameInput.value.trim();

    if (candidateName === '') {
        alert('Please enter a candidate name');
        return;
    }

    await contract.methods.addCandidate(candidateName).send({ from: web3.eth.defaultAccount });
    candidateNameInput.value = '';
    displayCandidates();

    // Provide visual feedback that the candidate has been added
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Candidate "${candidateName}" added successfully`;
}

// Event listener for add candidate button
document.getElementById('addCandidateButton').addEventListener('click', addCandidate);

// Function to vote for a candidate
async function vote() {
    // Replace 0 with the candidate index you want to vote for
    await contract.methods.vote(0).send({ from: web3.eth.defaultAccount });
    displayCandidates();

    // Provide visual feedback that the vote has been cast
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Vote cast successfully`;
}

// Event listener for vote button
document.getElementById('voteButton').addEventListener('click', vote);

// Load candidates when the page loads
window.addEventListener('load', async () => {
    // Prompt the user to connect their wallet
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];

    displayCandidates();
});


// Function to add a new candidate
async function addCandidate() {
    const candidateNameInput = document.getElementById('candidateName');
    const candidateName = candidateNameInput.value.trim();

    if (candidateName === '') {
        alert('Please enter a candidate name');
        return;
    }

    await contract.methods.addCandidate(candidateName).send({ from: web3.eth.defaultAccount });
    candidateNameInput.value = '';
    displayCandidates();

    // Provide visual feedback that the candidate has been added
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Candidate "${candidateName}" added successfully`;
}

// Event listener for add candidate button
document.getElementById('addCandidateButton').addEventListener('click', addCandidate);

// Function to vote for a candidate
async function vote() {
    // Replace 0 with the candidate index you want to vote for
    await contract.methods.vote(0).send({ from: web3.eth.defaultAccount });
    displayCandidates();

    // Provide visual feedback that the vote has been cast
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Vote cast successfully`;
}

// Event listener for vote button
document.getElementById('voteButton').addEventListener('click', vote);

// Load candidates when the page loads
window.addEventListener('load', async () => {
    // Prompt the user to connect their wallet
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];

    displayCandidates();
});
