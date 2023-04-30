var tags = []
function add(){
 let tag_name = document.getElementById('tag_name').value 
 let patterns = document.getElementById('patterns').value.split('\n')
 let responses = document.getElementById('responses').value.split('\n')
 tags.push({"tag":tag_name,"patterns":patterns,"responses":responses})
 document.getElementById('tag_name').value = ""
 document.getElementById('patterns').value = ""
 document.getElementById('responses').value = ""
}
function exportJson() {
    const data = JSON.stringify(tags);
    const filename = "tags.json";
    const blob = new Blob([data], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
  
