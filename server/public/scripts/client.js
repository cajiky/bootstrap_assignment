console.log('js');

$(nowReady);

function nowReady() {
    console.log('jq is ready to use :)')

    let el = $('#testAppend')

    for(let i = 0; i<90; i++){
        el.append(
    `<div class="card col-3">
    <p>col-4</p>
    </div>`)
    }
    
}