# Family-Tree-Algorithm
##  Design of the algorithm
The algorithm for the family tree works by starting with two different people. Then it traces back to each person’s parents and their parents until the last person has no parents, each lineage will have its own array.\
The next step is to find the common ancestor of each person, this is done by comparing each person one at a time in the same generation, starting from generation 0, until there is a difference. It will trace back one step of the difference and that will be the common ancestor. \
Afterwards, the next step is to find the lineage depth, in other words, how close is the common ancestor to the closest person. This is done by first checking if the common ancestor is one of two people, if so, the lineage depth is automatically 0. If not, it takes the person higher on the tree—or lower generation number—and subtracted by the common ancestor’s generation number. \
Next is to find the depth of the two people, or how much of a generational difference there is. This is simply done by subtracting one person from the other.\
After those 4 steps, all the numbers are acquired to be able to name the relationship between two people. It will begin by checking the lineage depth number. If it is one, then it has to be either some kind of parent—parent, grandparent, etc.—or some kind of child—grandchild, great-grandchild, etc. That is determined by the depth of two generations, negative is a child, and positive is a parent. If the depth the zero, then the two people are actually the same.\
If the lineage depth is one, then it has to be either your sibling, a depth of 0, or a niece/nephew, negative depth, or uncle/aunt, positive depth.\
The last kind of relationship is a cousin, the hardest type to name and find with a lineage depth of greater than 2. The naming convention is the hardest part, with things like first, second, or third cousins; and being once, twice, or thrice removed. The algorithm first calculates the correct ordinal number—first, second, third—by using the lineage depth. Lineage depth of two, the closest cousin, is a first cousin; three is a second cousin, etc. Ordinal numbers are difficult because of the ends, “st,”  “nd,” “ rd,”  and “th.” The algorithm by starts by doing a modulo of 100 on the lineage depth, since 100s and 1000s have no effect on the ordinal naming. Next, it checks if the numbers are not 11, 12, or 13, since they are an exception to the naming convention, ending with “th,” unlike other numbers ending in 1, 2, or 3. If it isn’t one of those three numbers, it does a modulo of 10 on lineage depth and then sends it back the corresponding ending; 1, 2, 3 returning with their respective endings and everything else is a “th.”\
After finding the correct ordinal number and end, the algorithm then finds the correct amount of times removed with the right name for it. This is found using the depth, 0 is nothing removed, 1 is once, 2 is twice, 3 is thrice, and anything larger than 4 just uses the normal number with a “times” attached to the end since there is no naming convention larger than thrice. Negative numbers are used with their absolute value since times removed do not matter if the generation is above or below—such as first cousin once removed can be a generation above or below.\
Once it finds both the ordinal number and the number of times removed. It uses those to narrow down the correct cousin. The code ends, with all variations of a family relation covered—with expectations to in-laws.
##  Pseudocode of the algorithm
1. Create a person class with a name and parent.
2. Add everyone to the person class.
3. Create variables for two people—person A and person B, two family lineages, a common ancestor and their generation, and lineage and normal depth.
4. Choose two random people and make them person A and person B.
5. Create the entire family lineage for each person and add them to a respective array.
	Done by checking if person A’s parent has a parent, IF so, continue up while adding them to the array.
	IF not, then add the person to the array and stop.
6. Do the same for person B.
7. Reverse both arrays.
8. Find the common ancestor between the two family trees.
	Done by first checking  IF person A and person B are the same person, IF so, then return person A/B.
IF not, then check each of the first people in the two array are the same, IF so, continue down the array until there is a difference.
IF there is a difference, RETURN the index of the person but one backwards, cause that is the common ancestor. 
9. Find the depth of the two people by subtracting person A’s generation from person B’s generation.
10. Find the lineage depth.
	IF the common ancestor is person A or B, then the lineage depth is 0.
	ELSE, take the person with the lower generation number and subtract the ancestor’s generation number.
11. Calculate the relationship between person A and B.\
	11.1 IF lineage depth is 0, then the person is in the same lineage.\
		IF depth is larger than, 4, then it is at least a great-great-grandparent and using depth - 1 to calculate how many times great.\
		ELSE IF depth is 3, then it is a great-grandparent.\
		ELSE IF depth is 2, then it is a grandparent.\
		ELSE IF depth is 1, then it is a parent.\
		ELSE IF depth is 0, then person A and B are the same person.\
		ELSE IF depth is -1, then it is a child.\
		ELSE IF depth is -2, then it is a grandchild.\
		ELSE IF depth is -3, then it is a great-grandchild.\
		ELSE IF depth is -4, then it is at least a great-great-grandchild and uses the absolute value of depth - 1 to calculate how many times great.\
	11.2 ELSE IF the lineage depth is 0, the person is either a sibling, uncle/aunt, or niece/nephew.\
IF depth is larger than, 4, then it is at least a great-great-granduncle/aunt and using depth - 1 to calculate how many times great.\
		ELSE IF depth is 3, then it is a great-granduncle/aunt.\
		ELSE IF depth is 2, then it is a granduncle/aunt.\
		ELSE IF depth is 1, then it is an uncle/aunt.\
		ELSE IF depth is 0, then person A and B are siblings.\
		ELSE IF depth is -1, then it is a niece/nephew.\
		ELSE IF depth is -2, then it is a grandniece/nephew.\
		ELSE IF depth is -3, then it is a great-grandniece/nephew.\
		ELSE IF depth is -4, then it is at least a great-great-grandniece/nephew and uses the absolute value of depth - 1 to calculate how many times great.\
	11.3 ELSE, then calculate the cousin type\
		Grab the correct ordinal number ending using lineage depth - 1.\
			Modulo 100.\
			IF the number is 11, 12, or 13, RETURN ‘th’\
			ELSE modulo 10\
				IF the number is 1, RETURN ‘st’\
				ELSE IF the number is 2, RETURN ‘nd’\
				ELSE IF the number is 3, RETURN ‘rd’\
				ELSE RETURN ‘th’\
		Grab the correct times removed using cousin depth\
			Turn the depth into an absolute number\
			IF depth is 0, RETURN ‘ ‘\
			ELSE IF depth is 1, RETURN ‘once‘\
			ELSE IF depth is 2, RETURN ‘twice‘\
			ELSE IF depth is 3, RETURN ‘thrice‘\
ELSE RETURN ‘ times ’\
‘	11.4 IF cousin depth is ‘ ‘, then it is a cousin not removed\
11.5 ELSE IF cousin depth is ‘ times ‘, then it is a cousin more than thrice removed\
11.6 ELSE IF cousin depth is ‘thrice‘, then it is a cousin thrice removed\
11.7 ELSE IF cousin depth is ‘twice,’ then it is a cousin twice removed\
11.8 ELSE IF cousin depth is ‘once,’ then it is a cousin once removed\
##  Complexity of the algorithm
The runtime of my algorithm is T(n) = O(3n) + a flat amount. 1 n for calculating family tree A, another n for calculating family tree B, and one more n for calculating common ancestor. The flat amount comes from calculating everything else, such as depths, relationship type, etc.\
##  Trade-Offs
A possible trade-off is that it takes a lot of memory to calculate certain things such as the name of the actual relationship since a fair amount of hard-coded information. And it can take a while to calculate simple things such as person A and B are the same person.\
