# eChing
Calculate I Ching hexagrams for divination using authentic yarrow-stalk distribution of line probility.

https://en.wikipedia.org/wiki/Iching

https://en.wikipedia.org/wiki/I_Ching_divination

The I Ching is one of the oldest continually in print books, first published over 2,000 years ago. In essence, it represents a system where values are randomly created (through varying methods) and six "lines" are output which are combined to create one of 64 "hexagrams." Each hexagram has properties that, like a Zen koan, are insightful in different meaningful ways depending on the context of the calculation. A person generally meditates on a question while using whatever random method they like to output lines, aftewarward consulting the I Ching  text to determine the meaning of their final hexagram.

It is believed to, through some mystical connection with randomness, provide meaningful information, organized into the 64 hexagram archetypes, that is outside of temporality. In other words, the I Ching is a way to programmatically access wisdom from outside of time and space. Try it, it is weird. And vague. But that is good.

Today people commonly use three coins to determine the lines in a hexagram. Unfortunately this results in an even distribution of the likelihood of a given type of line, and this is not in line with the ancient method of consulting the I Ching, a method which results in a very stilted distribution that has philosophically meaningful underpinnings.

Instead, this program uses the ancient and what is supposed to be more authentic distribution of lines.

Num  Yarrow   Coin   Name                      Image

6 -   1/16 	  8/16   [Yin changing into Yang]  ---x---

8 -   7/16 	  6/16   [Yin unchanging]          ---  ---

9 -   3/16 	  8/16   [Yang changing into Yin]  ---o---

7 -   5/16   	6/16 	 [Yanj unchanging]         --------

This is meaningful because line types 6 & 9 represent something called a changing line. If any of the lines in a six line hexagram is a changing line, a second, accompanying hexagram must be drawn wherein all of the changing lines have been switched out for their opposite type (solid turns to broken and vice versa). A reading that has one or more changing lines will result in two hexagrams with differing meaning, and more divinatory information related to the question at hand.

This program was designed to run on the Ethereum World Computer so that always and forever people will have easy access to magical information from outside of our dimension. You don't have to believe in it. Just meditate on a question you need some help answering and thinking about and then get a reading. There is nothing inherently magical about words that will help give you perspective on your life. But it almost seems magical.
--
Hosted version with graphical UI and MEW API coming soon, hang tight for the URL. Future versions will be hosted on IPFS.
--
eChingOraclized uses the correct yarrow-stalk distribution and also incorporates a true random number oracle via Oraclize. This is more expensive to run, and because the smart contract in its oracle-free form does not retain an ETH balance there is no reason to game it by exploiting its pseudo-randomness, and so the non oracle version is likely sufficient and more ideal for this task.

--
Test out an old version of the dApp which does not use the authentic yarrow-stalk distribution, but is instead an even random distribution of line likelihood, on the ropsten blockchain.

0xc537b12159ee1EF0e68391f4cc78FcE52694Cc7e


[{"constant":true,"inputs":[{"name":"_question","type":"string"}],"name":"cast","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}]

cast() function will return 6 numbers from 0 to 3
Where 0 is Old yin, 1 is Young yang, 2 is Young yin, 3 is Old yang


