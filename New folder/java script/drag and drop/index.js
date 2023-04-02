console.log("drag and drop chapter")
const imgBox = document.querySelector('.imgBox')
const whiteBoxes = document.getElementsByClassName('whiteBox')

imgBox.addEventListener('dragstart', (e)=>{
    console.log("this is dragstart function")
    e.target.className += ' hold';
    setTimeout(()=>{
        e.target.className = 'hide';
    }, 0)
});

imgBox.addEventListener('dragend', (e)=>{
    console.log("this is dragend function")
    e.target.className = 'imgBox';

});

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();

    })
    whiteBox.addEventListener('dragenter', (e)=>{
        e.target.className += ' dashed';

    })
    whiteBox.addEventListener('dragleave', (e)=>{
        e.target.className = 'whiteBox';

    })
    whiteBox.addEventListener('drop', (e)=>{
        e.target.append(imgBox);

    })
}