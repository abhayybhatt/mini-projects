let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
btn.addEventListener('click', function(){
    let item = document.createElement('li');
    item.innerText = inp.value;
    let delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);//li mein delBtn ko as its child append krna hai.
    ul.appendChild(item);//item ko as a child of ul append kr rhe hai.
    inp.value = "";//taaki koisa task add krne ke baad wapis apne aap input ki jagah clear ho jaye(old task jo add ho chuka hai wo input mein se hat jaayenga).
});
// let delBtns = document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//         let par = this.parentElement;//yaani button ka parent element = li
//         console.log(par);
//         par.remove();//Note: ye sirf pre-written tasks ko remove kr payega, jo alag se ham add krte hai unko nhi. Reason: hamare page pr jo ham event listeners ko add krte hai wo sirf existing elements ke liye add hote hai, naye wale elements ke liye ye apply nhi hote. lekin agr ham chahte hai ki naye elements ke liye bhi purane elements ke eventListeners kaam kare to ham use krte hai Event Delegation ka.
   // });
//};
// Event Delegation: a phenomenon in which we use bubbling property. Taaki seedhe jis item mein change laani ho uske parent mein change maare, usse jab naya element add bhi agr hoga to wo event listener to parent ke liye add kr denge, to jab naye child element ke create hone pr jab uspr wo event aayega, to automatically parent element ka jo event listener hai wo trigger ho jayenga. So in this case, ya to li pr event listener add kro ya fir ul pr kro, ye dono hi apne btn ke parents kahe jaa sakte hai here.
ul.addEventListener('click',function(event){
   if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('deleted.');
   };//isse pata chalega ki kaunsa button click kiya gya hai. nodeName batayega kisne event ko trigger kiya, kya wo button hai, div hai, ya kuch aur hai. In this case, it will give BUTTON as output.
});
