module.exports = WriterService;

function WriterService(pencil, paper, isWhitespace) {
    this.write=function(text){
       if (paper.text===null){
            paper.text=text;
        }else{
           paper.text+=text;
        }

        pencil.durability -= getReducedDurability(text, isWhitespace);
                
        return paper.text;
    };

    function getReducedDurability(text, isWhitespace) {
        var durabilitySubtraction = 0;
        
        for(var i = 0; i < text.length; i++) {
            var character = text[i];

            if(!isWhitespace(character)) {
                durabilitySubtraction++;
            }

            if(!isWhitespace(character) && character === character.toUpperCase()) {
                durabilitySubtraction++;
            }
        };

        return durabilitySubtraction;
    }
};
