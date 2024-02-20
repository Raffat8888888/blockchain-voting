// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;

    mapping(address => bool) public voters;

    event Voted(address indexed voter, uint256 candidateIndex);
    event CandidateAdded(string name);

    constructor(string[] memory _candidateNames) {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({ name: _candidateNames[i], voteCount: 0 }));
        }
    }

    function getCandidateCount() external view returns (uint256) {
        return candidates.length;
    }

    function addCandidate(string memory _name) external {
        require(bytes(_name).length > 0, "Empty candidate name");

        candidates.push(Candidate({ name: _name, voteCount: 0 }));
        emit CandidateAdded(_name);
    }

    function vote(uint256 _candidateIndex) external {
        require(_candidateIndex < candidates.length, "Invalid candidate index");
        require(!voters[msg.sender], "Already voted");

        candidates[_candidateIndex].voteCount++;
        voters[msg.sender] = true;

        emit Voted(msg.sender, _candidateIndex);
    }
}
