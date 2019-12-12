function getLine(number) {

    if (number) {
        return render(number)
    } else {
        return 0;
    }

}
const creditos = `<h2 style="text-align: center;"><span style="color: #0000ff;"><strong>Linha N&atilde;o Encontrada</strong></span></h2>
<hr />
<p style="text-align: left;"><strong>Por favor consulte : <a href="https://mocline.herokuapp.com/linhas">linhas</a>, para ter uma lista das linhas de &ocirc;nibus dispon&iacute;veis.&nbsp;&nbsp;<img src="https://html-online.com/editor/tinymce4_6_5/plugins/emoticons/img/smiley-wink.gif" alt="wink" /></strong></p>
<h2 style="text-align: left;">Desenvolvedores:&nbsp;</h2>
<ul>
<li>&nbsp;<a href="https://github.com/Kaiofprates" target="_blank" rel="noopener">Kaio Prates</a></li>
<li><a href="https://github.com/GabrielAPaiva" target="_blank" rel="noopener">Gabriel Aquino Paiva</a></li>
</ul>`

function render(cal) {
    try {
        this.jsonload = require('./' + cal + '.json')
        return Object(this.jsonload)

    } catch (err) {
        console.log(err)
    }
    return creditos
}

module.exports = { getLine }