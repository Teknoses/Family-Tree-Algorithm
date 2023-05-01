
class person{
  constructor(name,parent){
    this.name = name
    this.parent = parent
  }
}
//people
  let Jeff = new person('Jeff',) 
  let Stephen = new person('Stephen',Jeff) 
  let Annie = new person('Annie',Jeff)
  let Shelly = new person('Shelly',Jeff)
  let Joe = new person('Joe',Stephen)
  let Hank = new person('Hank',Joe)
  let Rex = new person('Rex',Shelly)
  let Bob = new person('Bob',Rex)
  let Jason = new person('Jason',Bob)
  let Connor = new person('Connor',Shelly)
  let Mike = new person('Mike',Connor)
  let Jordan = new person('Jordan', Jason)
  let Jack = new person('Jack', Jordan)
//all of the people
let people = [Jeff,
              Stephen,
              Annie,
              Shelly,
              Joe,
              Hank,
              Rex,
              Bob,
              Jason,
              Connor,
              Mike,
              Jordan,
              Jack
             ]
//variables 
let personA
let personB

let treeA = []
let treeB = []
let commonAncestor
let commonAncestorGen
let lineageDepth
let depth

let count = 0

function setup() {
  //picks two random people
  personA = Jack
  print(personA.name + ' is personA')
  personB = Annie
  print(personB.name + ' is personB')
  //creates the branch of both people from start to finish
  branchBfinder(personA, treeA)
  branchBfinder(personB, treeB) 
  //reverse the order of both branches  
  treeA.reverse()
  treeB.reverse() 
  //prints out the tree
  console.log(treeA)
  console.log(treeB)
  //finds the common ancestor between the two
  commonAncestorGen = findCommonAncestor(0) 
  commonAncestor = treeA[commonAncestorGen]
  print(commonAncestor.name + ' is the common ancestor')
  //Calculates the generations apart between the two people
  depth = treeA.length - treeB.length
  //IF any of the people are in the common ancestor, make the lineageDepth, or directly related
  if(commonAncestor == treeA[(treeA.length - 1)] || commonAncestor == treeB[(treeB.length - 1)]){
    lineageDepth = 0
  }
  //ELSE caluclate the person higher on the family tree or lower generation
  else{
    lineageDepth = (Math.min(treeA.length,treeB.length) - 1) - commonAncestorGen
  }
  //Calulates the relationship
  relationship() 
  
}
//Keeps going up the family tree until one person has no parent and adds the entire lineage to the TreeA
function branchAfinder(person){
  count++
  let parent = person.parent
  if(parent != undefined){
    treeA.push(person)
   branchAfinder(parent) 
  }
  else{
    treeA.push(person)
  }
}
//Same as branchAfinder but for personA
function branchBfinder(person, treeX){
  count++
  let parent = person.parent
  if(parent != undefined){
    treeX.push(person)
   branchBfinder(parent, treeX) 
  }
  else{
    treeX.push(person)
  }
}
//Finds the common ancestor
function findCommonAncestor(i){
  count++
  if(treeA[treeA.length - 1] == treeB[treeB.length - 1]){
    return (treeA.length - 1)
  }
  //Compares personA and personB lineage for the same person, IF so, continue down the lineages
  if(treeA[i] == treeB[i]){ 
    return findCommonAncestor(i + 1)
  }
  //IF the people are not the same, go back one and that is the common ancestor and their generation
  else{
    return i - 1
  }
}

function relationship(){
  //IF the Common Ancestor is the same as one of people, which asks are they directedly related?
  if(lineageDepth == 0){
    sameLineage()
  }
  //IF the common ancestor is only generation above the highest person generation, then compare
  else if(lineageDepth == 1){
   oneLineage() 
  }
  //IF it is neither of those, then they have to be cousins since all the others have other names
  else{
    cousinDistance(lineageDepth, depth)
  }
}
//Depending on the depth, caluclates and prints the generation
function sameLineage(){
    if(depth >= 4){
      console.log(personB.name + ' is ' + personA.name + "'s " + (depth-2) + 'x great grandparent')
    }
    else if(depth == 3){
      console.log(personB.name + ' is ' + personA.name + "'s great grandparent")
    }
    else if(depth == 2){
      console.log(personB.name + ' is ' + personA.name + "'s grandparent")
    }
    else if(depth == 1){
      console.log(personB.name + ' is ' + personA.name + "'s parent")
    }
    else if(depth == 0){
      console.log('That is the same person')
    }
    else if(depth == -1){
    console.log(personB.name + ' is ' + personA.name + "'s child")
    }
    else if(depth == -2){
    console.log(personB.name + ' is ' + personA.name + "'s grandchild")
    }
    else if(depth == -3){
    
    console.log(personB.name + ' is ' + personA.name + "'s great grandchild")
    }
    else if(depth <= -4){
     console.log(personB.name + ' is ' + personA.name + "'s " + (Math.abs(depth) - 2) + 'x great grandchild')
  }
}
//Depending on the depth, caluclates and prints the generation
function oneLineage(){
  if(depth >= 4){
    console.log(personB.name + ' is ' + personA.name + "'s " + (depth-2) + 'x great grand uncle/aunt')
  }
  else if(depth == 3){
    console.log(personB.name + ' is ' + personA.name + "'s great grand uncle/aunt")
  }
  else if(depth == 2){
    console.log(personB.name + ' is ' + personA.name + "'s grand uncle/aunt")
  }
  else if(depth == 1){
    console.log(personB.name + ' is ' + personA.name + "'s uncle/aunt")
   }
  else if(depth == 0){
    console.log(personB.name + ' is ' + personA.name + "'s sibling")          
  }
  else if(depth == -1){
    console.log(personB.name + ' is ' + personA.name + "'s niece/nephew")            
  }
  else if(depth == -2){
    console.log(personB.name + ' is ' + personA.name + "'s grand niece/nephew")            
  }
  else if(depth == -3){
    console.log(personB.name + ' is ' + personA.name + "'s great grand niece/nephew")            
  }
  else if(depth <= -4){
    console.log(personB.name + ' is ' + personA.name + "'s " + (Math.abs(depth) - 2) + 'x great grand niece/nephew')       
  }
}
//Caluclates the cousin 
function cousinDistance(linedepth, normaldepth){
  
  let ordinalEnding = ordinal(linedepth - 1)
  let cousinDep = cousinDepth(normaldepth)
  //IF not removed cousins, go here
    console.log(personB.name + ' is ' + personA.name + ' ' + (linedepth - 1) + ordinalEnding + ' cousin' + cousinDep)
}
//Returns the correct ordinal number
function ordinal(number){
  //Module 100 since it does not affect the ending a cardinal number
  number = number % 100
  //IF the numbers are not 11, 12, or 13, then go to ELSE
  if(number <= 13 && number >= 11){
    //11, 12, 13 are odd and end with 'th' even though it ends with 1, 2, or 3, so exclude from the other search and send back 'th'
    return 'th'
  }
  else{
    //Modulo 10 since it will not affect these numbers, and send back the correct ending
    number = number % 10
    if(number == 1){
      return 'st'
    }
    else if(number == 2){
      return 'nd'
    }
    else if(number == 3){
      return 'rd'
    }
    else{
      return 'th'
    } 
  }
}
//Calculates how many times removed a cousin is
function cousinDepth(d){
  //depth negatives does not affect cousin naming, so it needs absolute value, and send correct ending
  d = Math.abs(d)
  if(d == 0){
    return ' '
  }
  else if(d == 1){
    return ' once removed'
  }
  else if(d == 2){
    return ' twice removed'
  }
  else if(d == 3){
    return ' thrice removed'
  }
  else{
    return ` ${d} times removed `
  }
}