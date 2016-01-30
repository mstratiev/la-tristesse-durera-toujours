! function() {

var gogh = (function(){

    var counts = {
        a: 66,
        d: 49,
        e: 36,
        j: 43,
        i: 32,
        l: 31,
        o: 42,
        r: 55,
        s: 52,
        t: 37,
        u: 31
    };

    var randomN = function(N) {
        return random = Math.floor(Math.random() * (N - 1 + 1)) + 1;
    };
    var im = function(letter) {
        var r = randomN(counts[letter]) + '';
        if (r.length == 1) {
            r = '0' + r;
        };
        return letter+'/'+ letter + '_' + r + '.jpg';
    };
    var parse = function(word) {
        var result = [],
            len = word.length,
            i;
        for (i = 0; i < len; i += 1) {
            result.push(im(word[i]));
        }
        return {letters: result}
    }
   	var data = {
        la: parse('la'),
        tristesse: parse('tristesse'),
        durera: parse('durera'),
        toujours: parse('toujours')
    };
    var template = '{{#each words}}<div class="word" id="{{@key}}">{{#each letters}}<img src="img/{{this}}"/>{{/each}}</div>{{/each}}'
    var temp = Handlebars.compile(template);
    $('#content').html(temp({"words":data}))



})();
}();
