// Thank you confirmation

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('email'));
console.log(myInfo.get('telephone'));
console.log(myInfo.get('business'));
console.log(myInfo.get('timestamp'));

document.querySelector('#results').innerHTML = `
<p>Name: ${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Telephone: ${myInfo.get('telephone')}</p>
<p>Business Name: ${myInfo.get('business')}</p>
<p>Time: ${myInfo.get('timestamp')}</p>`

