const readline = require('readline');

/**
let list001 list
push list001 99
append list001 88
append list001 : 77 66 end
print pull list001 1
let func001 func arg arg01 arg02 end cmd print + arg01 arg02 end
print func001 1 2
print get func001
let sum 0
map a func item: set sum + sum item
print sum
**/

const OP_LET = 'let';
const OP_SET = 'set';
const OP_GET = 'get';

const OP_ARG = 'arg';
const OP_CMD = 'cmd';
const OP_BEGIN = ':';
const OP_END = 'end';

const OP_BASE = 'base';
const OP_REF = 'ref';

const OP_TAG = 'tag';
const OP_FIND = 'find';

const OP_WHILE = 'while';
const OP_ITER = 'iter';
const OP_REPEAT = 'repeat';
const OP_BREAK = 'break';

const OP_IS = 'is';
const OP_EQ = '=';
const OP_GT = '>';
const OP_GTE = '>=';
const OP_LT = '<';
const OP_LTE = '<=';

const TYPE_INT = 'int';
const TYPE_FLOAT = 'float';
const TYPE_STR = 'str';
const TYPE_REF = 'ref';
const TYPE_NONE = 'none';

const TYPE_ACTION = 'func';
const TYPE_ARG = 'arg';
const TYPE_CMD = 'cmd';

const TYPE_DICT = 'dict';
const TYPE_LIST = 'list';

const ACTION_MAP = 'map';
const ACTION_PUSH = 'push';
const ACTION_APPEND = 'append';
const ACTION_POP = 'pop';
const ACTION_PUT = 'put';
const ACTION_PULL = 'pull';

const ACTION_KEYS = 'keys';
const ACTION_VALUES = 'values';

const ACTION_ADD = '+';

const ACTION_EXIT = 'exit';

let root = {};

function getInput(){
  return new Promise(function(resolve, reject) {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Say: ', (answer) => {
      rl.close();
      resolve(answer);
    });
  })
  .then((value) => {
    console.log(value);

    parseInput(value);

    getInput();
  })
  .catch((err) => {
    console.log(err);
  })
  ;
}

function parseInput(value){
  if (value === ACTION_EXIT) {
    process.exit(0);
    return;
  }

  let commandList = value.trim().split(' ');
  for (let command in commandList) {

  }
}

let commandPromise = getInput();
