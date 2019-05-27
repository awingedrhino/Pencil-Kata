const assert=require('assert');

const isWhitespace = require('is-whitespace-character');

const PencilModel = require('../../models/Pencil.model');
const PaperModel = require('../../models/Paper.model');

const WriterService = require('../../services/Writer.service');

describe('Writer',function(){
    it('should reflect the text as written',function(){      
        const pencil = new PencilModel();
        const paper = new PaperModel();

        const writer = new WriterService(pencil, paper, isWhitespace);
                
        const expected = 'Hello, World!';
        const actual = writer.write(expected);
        
        assert.equal(actual, expected);
    });

    it('should always append to the existing text',function(){
        const pencil = new PencilModel();
        const paper = new PaperModel();

        const writer = new WriterService(pencil, paper, isWhitespace);
        
        writer.write('Hello, ');
        const actual = writer.write('World!');

        const expected = 'Hello, World!';

        assert.equal(actual, expected);
    });

    it('shoud decrease pencil durability by 1 for each lowercase visible character when it is used to write text', function() {
        // hello
    });

    it('shoud decrease pencil durability by 2 when it is used to write a capital letter', function() {
        // Hello
    });

    it('shoud not decrease pencil durability when it is used to write whitespace', function() {
        // hello world
    });
});
