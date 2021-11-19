var account = localStorage.getItem('_name');
account = atob(account);
document.querySelector('.nnnn').innerHTML="Welcome ! "+ account
document.querySelector('.nn').innerHTML="Welcome ! "+ account
console.log(account)