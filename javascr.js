function rotate(ye){
    var id = document.getElementById(ye);
    var textNode = element.chileNode[0]; 
    var text = textNode.data;
    
    setInterval(()=> {
    text = text[text.length -1]+ text.substring(0, text.length -1)
    textNode.data = text},100)
}