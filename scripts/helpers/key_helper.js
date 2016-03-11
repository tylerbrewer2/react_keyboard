// Key helper functions

var _ = require('underscore');

var Helper = {

  getLetterKeys : function() {
    var initialAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    var alphabetArray = _.map(initialAlphabet, function(letter) {
      return letter;
    });
    return alphabetArray;
  },
  
  getNumberKeys : function() {
    var numbers = _.range(1,9);
    return numbers;
  },

  getSymbolCharacters : function() {
    var symbols = ['.', '-', '_', '@'];
    return symbols;
  },

  getActionItems : function() {
    var actions = ['.COM', 'CLEAR', 'DELETE'];
    return actions;
  },

  getAllCharacters : function() {
    var allKeys = [];
    allKeys.push(this.getLetterKeys());
    allKeys.push(this.getNumberKeys());
    allKeys.push(this.getSymbolCharacters());
    allKeys.push(this.getActionItems());
    return allKeys.join(',').split(',');
  }
};

export default Helper;
