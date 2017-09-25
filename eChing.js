pragma solidity ^0.4.15;

contract IChing {
	// takes a question of user and returns array of 6 numbers from 0 to 3
	// 0 - Old yin, 1 - Young yin, 2 - Old yang, 3 - Young yang
	function cast(string _question) public constant returns(uint[]) {
		uint[] memory lines = new uint[](6);
		for (uint i = 0; i < 6; i++) {
			lines[i] = line(_question, i);
		}
		return lines;
	}

	// takes a question of user and number of the line and returns a number from 0 to 3
	// internal means that this function can't be invoked outside of this contract
	// keccak256 makes a pseudo random number considering:
	// number of current block, address of sender, question of user, line height
	function line(string _question, uint _lineHeight) internal constant returns (uint) {
		uint randomNumber = uint(keccak256(block.number, msg.sender, _question, _lineHeight)) % 16;
		if (randomNumber == 0) {
			return 0;
		} else if (randomNumber > 0 && randomNumber <= 7) {
			return 1;
		} else if (randomNumber > 7 && randomNumber <= 10) {
			return 2;
		} else {
			return 3;
		}
	}

}