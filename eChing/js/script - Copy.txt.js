var net = "rop" // rop - Ropsten, eth - Mainnet
var ABI = [{"constant":true,"inputs":[{"name":"_question","type":"string"}],"name":"cast","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}];
var address = "0xF69FDA67fA2C692532607b5cfc785b81e63b2801";

var IChingContract;
var IChingContractInstance;
var useMetaMask;

var line_url = [];
line_url[6] = "https://i.imgur.com/j8yHVLt.png";
line_url[7] = "https://i.imgur.com/eyHUKuK.png";
line_url[8] = "https://i.imgur.com/Z9sMRq4.png";
line_url[9] = "https://i.imgur.com/ObbWJzQ.png";

var hexagram1 = $("#hexagram1");
var hexagram2 = $("#hexagram2");
var hexagram1_info = $("#hexagram1_info");
var hexagram2_info = $("#hexagram2_info");

var cast = $("#cast");
var question = $("#question");

$(document).ready(function() {
  if (typeof web3 !== 'undefined') {
    useMetaMask = true;
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://api.myetherapi.com/" + net));
  	IChingContract = web3.eth.contract(ABI);
  	IChingContractInstance = IChingContract.at(address);
  } else {
  	useMetaMask = false;
    alert('Please install Metamask and then try again!');
  }
	cast.attr("disabled", true);
});

question.on('input', function() {
	if (question.val()) {
		cast.attr("disabled", false);
	} else {
		cast.attr("disabled", true);
	}
});

cast.click(function() {
	if(useMetaMask) {
		IChingContractInstance.cast(question.val(), function(err, result) {
			for (var i = 0; i < result.length; i++) {
				result[i] = result[i].toNumber();
			}
			console.log(result)
			drawHexagram(hexagram1, result);
			var changed = false;
			var result_changed = result.slice();
			for (var i = 0; i < result_changed.length; i++) {
				if (result_changed[i] == 6) {
					result_changed[i] = 7;
					changed = true;
				} else if (result_changed[i] == 9) {
					result_changed[i] = 8;
					changed = true;
				}
			}
			if (changed) {
				hexagram2.show();
				hexagram1.attr("class", "col-md-6");
				drawHexagram(hexagram2, result_changed);

				hexagram2_info.show();
				hexagram1_info.attr("class", "col-md-6");
				drawInfo(hexagram1_info, result);
				drawInfo(hexagram2_info, result_changed);
			} else {
				hexagram2.hide();
				hexagram1.attr("class", "col-md-12");
				hexagram2_info.hide();
				hexagram1_info.attr("class", "col-md-12");
				drawInfo(hexagram1_info, result);
			}
			cast.attr("disabled", "true");
		});
	}
});

function drawHexagram(container, lines) {
	container.empty();
	for (var i = 0; i < lines.length; i++) {
		drawLine(container, lines[i]);
	}
}

function drawLine(container, line) {
	container.prepend("<p><img src=" + line_url[line] + "></p>");
}

function drawInfo(container, lines) {
	var hexNumber = hexagramNumber(lines);
	container.empty();
	container.append("<h2>Hexagram number: " + hexNumber + "</h2>");
	// here you can add additional info that depends on hexNumber
	container.append("<p>Some additional info</p>");
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function hexagramNumber(lines) {
	lines.reverse();
	for (var i = 0; i < lines.length; i++) {
			if (lines[i] == 8 || lines[i] == 6) {
				lines[i] = 0;
			} else {
				lines[i] = 1;
			}
	}
	if (arraysEqual(lines, [1, 1, 1, 1, 1, 1])) {
	  return 1;
	}
	if (arraysEqual(lines, [1, 1, 1, 0, 0, 0])) {
	  return 12;
	}
	if (arraysEqual(lines, [1, 1, 1, 0, 0, 1])) {
	  return 25;
	}
	if (arraysEqual(lines, [1, 1, 1, 0, 1, 0])) {
	  return 6;
	}
	if (arraysEqual(lines, [1, 1, 1, 1, 0, 0])) {
	  return 33;
	}
	if (arraysEqual(lines, [1, 1, 1, 1, 1, 0])) {
	  return 44;
	}
	if (arraysEqual(lines, [1, 1, 1, 1, 0, 1])) {
	  return 13;
	}
	if (arraysEqual(lines, [1, 1, 1, 0, 1, 1])) {
	  return 10;
	}
	if (arraysEqual(lines, [0, 0, 0, 1, 1, 1])) {
	  return 11;
	}
	if (arraysEqual(lines, [0, 0, 0, 0, 0, 0])) {
	  return 2;
	}
	if (arraysEqual(lines, [0, 0, 0, 0, 0, 1])) {
	  return 24;
	}
	if (arraysEqual(lines, [0, 0, 0, 0, 1, 0])) {
	  return 7;
	}
	if (arraysEqual(lines, [0, 0, 0, 1, 0, 0])) {
	  return 15;
	}
	if (arraysEqual(lines, [0, 0, 0, 1, 1, 0])) {
	  return 46;
	}
	if (arraysEqual(lines, [0, 0, 0, 1, 0, 1])) {
	  return 36;
	}
	if (arraysEqual(lines, [0, 0, 0, 0, 1, 1])) {
	  return 19;
	}
	if (arraysEqual(lines, [0, 0, 1, 1, 1, 1])) {
	  return 34;
	}
	if (arraysEqual(lines, [0, 0, 1, 0, 0, 0])) {
	  return 16;
	}
	if (arraysEqual(lines, [0, 0, 1, 0, 0, 1])) {
	  return 51;
	}
	if (arraysEqual(lines, [0, 0, 1, 0, 1, 0])) {
	  return 40;
	}
	if (arraysEqual(lines, [0, 0, 1, 1, 0, 0])) {
	  return 62;
	}
	if (arraysEqual(lines, [0, 0, 1, 1, 1, 0])) {
	  return 32;
	}
	if (arraysEqual(lines, [0, 0, 1, 1, 0, 1])) {
	  return 55;
	}
	if (arraysEqual(lines, [0, 0, 1, 0, 1, 1])) {
	  return 54;
	}
	if (arraysEqual(lines, [0, 1, 0, 1, 1, 1])) {
	  return 5;
	}
	if (arraysEqual(lines, [0, 1, 0, 0, 0, 0])) {
	  return 8;
	}
	if (arraysEqual(lines, [0, 1, 0, 0, 0, 1])) {
	  return 3;
	}
	if (arraysEqual(lines, [0, 1, 0, 0, 1, 0])) {
	  return 29;
	}
	if (arraysEqual(lines, [0, 1, 0, 1, 0, 0])) {
	  return 39;
	}
	if (arraysEqual(lines, [0, 1, 0, 1, 1, 0])) {
	  return 48;
	}
	if (arraysEqual(lines, [0, 1, 0, 1, 0, 1])) {
	  return 63;
	}
	if (arraysEqual(lines, [0, 1, 0, 0, 1, 1])) {
	  return 60;
	}
	if (arraysEqual(lines, [1, 0, 0, 1, 1, 1])) {
	  return 26;
	}
	if (arraysEqual(lines, [1, 0, 0, 0, 0, 0])) {
	  return 23;
	}
	if (arraysEqual(lines, [1, 0, 0, 0, 0, 1])) {
	  return 27;
	}
	if (arraysEqual(lines, [1, 0, 0, 0, 1, 0])) {
	  return 4;
	}
	if (arraysEqual(lines, [1, 0, 0, 1, 0, 0])) {
	  return 52;
	}
	if (arraysEqual(lines, [1, 0, 0, 1, 1, 0])) {
	  return 18;
	}
	if (arraysEqual(lines, [1, 0, 0, 1, 0, 1])) {
	  return 22;
	}
	if (arraysEqual(lines, [1, 0, 0, 0, 1, 1])) {
	  return 41;
	}
	if (arraysEqual(lines, [1, 1, 0, 1, 1, 1])) {
	  return 9;
	}
	if (arraysEqual(lines, [1, 1, 0, 0, 0, 0])) {
	  return 20;
	}
	if (arraysEqual(lines, [1, 1, 0, 0, 0, 1])) {
	  return 42;
	}
	if (arraysEqual(lines, [1, 1, 0, 0, 1, 0])) {
	  return 59;
	}
	if (arraysEqual(lines, [1, 1, 0, 1, 0, 0])) {
	  return 53;
	}
	if (arraysEqual(lines, [1, 1, 0, 1, 1, 0])) {
	  return 57;
	}
	if (arraysEqual(lines, [1, 1, 0, 1, 0, 1])) {
	  return 37;
	}
	if (arraysEqual(lines, [1, 1, 0, 0, 1, 1])) {
	  return 61;
	}
	if (arraysEqual(lines, [1, 0, 1, 1, 1, 1])) {
	  return 14;
	}
	if (arraysEqual(lines, [1, 0, 1, 0, 0, 0])) {
	  return 35;
	}
	if (arraysEqual(lines, [1, 0, 1, 0, 0, 1])) {
	  return 21;
	}
	if (arraysEqual(lines, [1, 0, 1, 0, 1, 0])) {
	  return 64;
	}
	if (arraysEqual(lines, [1, 0, 1, 1, 0, 0])) {
	  return 56;
	}
	if (arraysEqual(lines, [1, 0, 1, 1, 1, 0])) {
	  return 50;
	}
	if (arraysEqual(lines, [1, 0, 1, 1, 0, 1])) {
	  return 30;
	}
	if (arraysEqual(lines, [1, 0, 1, 0, 1, 1])) {
	  return 38;
	}
	if (arraysEqual(lines, [0, 1, 1, 1, 1, 1])) {
	  return 43;
	}
	if (arraysEqual(lines, [0, 1, 1, 0, 0, 0])) {
	  return 45;
	}
	if (arraysEqual(lines, [0, 1, 1, 0, 0, 1])) {
	  return 17;
	}
	if (arraysEqual(lines, [0, 1, 1, 0, 1, 0])) {
	  return 47;
	}
	if (arraysEqual(lines, [0, 1, 1, 1, 0, 0])) {
	  return 31;
	}
	if (arraysEqual(lines, [0, 1, 1, 1, 1, 0])) {
	  return 28;
	}
	if (arraysEqual(lines, [0, 1, 1, 1, 0, 1])) {
	  return 49;
	}
	if (arraysEqual(lines, [0, 1, 1, 0, 1, 1])) {
	  return 58;
	}

}